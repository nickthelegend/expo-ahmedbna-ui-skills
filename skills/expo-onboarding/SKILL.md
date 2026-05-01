---
name: expo-onboarding
description: Production-grade Expo Onboarding Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Onboarding

## Overview
A high-performance onboarding component for Expo and React Native applications.

## Implementation

### Code
```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  image?: React.ReactNode;
  icon?: React.ReactNode;
  backgroundColor?: string;
}

export interface OnboardingProps {
  steps: OnboardingStep[];
  onComplete: () => void;
  onSkip?: () => void;
  showSkip?: boolean;
  showProgress?: boolean;
  swipeEnabled?: boolean;
  primaryButtonText?: string;
  skipButtonText?: string;
  nextButtonText?: string;
  backButtonText?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}

// Enhanced Onboarding Step Component for complex layouts
interface OnboardingStepContentProps {
  step: OnboardingStep;
  isActive: boolean;
  children?: React.ReactNode;
}

export function Onboarding({
  steps,
  onComplete,
  onSkip,
  showSkip = true,
  showProgress = true,
  swipeEnabled = true,
  primaryButtonText = 'Get Started',
  skipButtonText = 'Skip',
  nextButtonText = 'Next',
  backButtonText = 'Back',
  style,
  children,
}: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const translateX = useSharedValue(0);

  const backgroundColor = useColor('background');
  const primaryColor = useColor('primary');
  const mutedColor = useColor('mutedForeground');

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      scrollViewRef.current?.scrollTo({
        x: nextStep * screenWidth,
        animated: true,
      });
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      scrollViewRef.current?.scrollTo({
        x: prevStep * screenWidth,
        animated: true,
      });
    }
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      onComplete();
    }
  };

  // Modern gesture handling with Gesture API
  const panGesture = Gesture.Pan()
    .enabled(swipeEnabled)
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      const { translationX, velocityX } = event;
      const shouldSwipe =
        Math.abs(translationX) > screenWidth * 0.3 || Math.abs(velocityX) > 500;

      if (shouldSwipe) {
        if (translationX > 0 && !isFirstStep) {
          // Swipe right - go back
          runOnJS(handleBack)();
        } else if (translationX < 0 && !isLastStep) {
          // Swipe left - go next
          runOnJS(handleNext)();
        }
      }

      translateX.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const renderProgressDots = () => {
    if (!showProgress) return null;

    return (
      <View style={styles.progressContainer}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressDot,
              {
                backgroundColor:
                  index === currentStep ? primaryColor : mutedColor,
                opacity: index === currentStep ? 1 : 0.3,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  const renderStep = (step: OnboardingStep, index: number) => {
    const isActive = index === currentStep;

    return (
      <Animated.View
        key={step.id}
        style={[
          styles.stepContainer,
          { backgroundColor: step.backgroundColor || backgroundColor },
          { opacity: isActive ? 1 : 0.8 },
        ]}
      >
        <View style={styles.contentContainer}>
          {step.image && (
            <View style={styles.imageContainer}>{step.image}</View>
          )}

          {step.icon && !step.image && (
            <View style={styles.imageContainer}>{step.icon}</View>
          )}

          <View style={styles.textContainer}>
            <Text variant='title' style={styles.title}>
              {step.title}
            </Text>
            <Text variant='body' style={styles.description}>
              {step.description}
            </Text>
          </View>

          {children && <View style={styles.customContent}>{children}</View>}
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEnabled={swipeEnabled}
            onMomentumScrollEnd={(event) => {
              const newStep = Math.round(
                event.nativeEvent.contentOffset.x / screenWidth
              );
              setCurrentStep(newStep);
            }}
          >
            {steps.map((step, index) => renderStep(step, index))}
          </ScrollView>
        </Animated.View>
      </GestureDetector>

      {/* Progress Dots */}
      {renderProgressDots()}

      {/* Skip Button */}
      {showSkip && !isLastStep && (
        <View style={styles.skipContainer}>
          <Button variant='ghost' onPress={handleSkip}>
            {skipButtonText}
          </Button>
        </View>
      )}

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        {!isFirstStep && (
          <Button variant='outline' onPress={handleBack} style={{ flex: 1 }}>
            {backButtonText}
          </Button>
        )}

        <Button
          variant='default'
          onPress={handleNext}
          style={[...(isFirstStep ? [styles.fullWidthButton] : [{ flex: 2 }])]}
        >
          {isLastStep ? primaryButtonText : nextButtonText}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepContainer: {
    width: screenWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    minHeight: 200,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  description: {
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  customContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  skipContainer: {
    position: 'absolute',
    top: 60,
    right: 10,
    zIndex: 1,
  },
  buttonContainer: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 12,
  },
  fullWidthButton: {
    flex: 1,
  },
});

// Onboarding Hook for managing state
export function useOnboarding() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [currentOnboardingStep, setCurrentOnboardingStep] = useState(0);

  const completeOnboarding = async () => {
    try {
      // In a real app, you'd save this to AsyncStorage or similar
      setHasCompletedOnboarding(true);
      console.log('Onboarding completed and saved');
    } catch (error) {
      console.error('Failed to save onboarding completion:', error);
    }
  };

  const resetOnboarding = () => {
    setHasCompletedOnboarding(false);
    setCurrentOnboardingStep(0);
  };

  const skipOnboarding = async () => {
    await completeOnboarding();
  };

  return {
    hasCompletedOnboarding,
    currentOnboardingStep,
    setCurrentOnboardingStep,
    completeOnboarding,
    resetOnboarding,
    skipOnboarding,
  };
}

```

## Usage Example
```tsx
import { Onboarding, useOnboarding } from '@/components/ui/onboarding';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';

export const OnboardingPresets = {
  welcome: [
    {
      id: 'welcome',
      title: 'Welcome to Our App',
      description:
        'Discover amazing features and get started with your journey.',
      icon: <Text style={{ fontSize: 80 }}>👋</Text>,
    },
    {
      id: 'features',
      title: 'Powerful Features',
      description:
        'Experience cutting-edge functionality designed to make your life easier.',
      icon: <Text style={{ fontSize: 80 }}>⚡</Text>,
    },
    {
      id: 'personalize',
      title: 'Personalize Your Experience',
      description: 'Customize the app to match your preferences and workflow.',
      icon: <Text style={{ fontSize: 80 }}>🎨</Text>,
    },
    {
      id: 'ready',
      title: "You're All Set!",
      description:
        "Everything is ready. Let's start exploring what you can achieve.",
      icon: <Text style={{ fontSize: 80 }}>🚀</Text>,
    },
  ],

  features: [
    {
      id: 'organize',
      title: 'Stay Organized',
      description: 'Keep all your important information in one secure place.',
      icon: <Text style={{ fontSize: 80 }}>📋</Text>,
    },
    {
      id: 'collaborate',
      title: 'Collaborate Seamlessly',
      description: 'Work together with your team in real-time, anywhere.',
      icon: <Text style={{ fontSize: 80 }}>🤝</Text>,
    },
    {
      id: 'automate',
      title: 'Automate Your Workflow',
      description: 'Set up smart automations to save time and reduce errors.',
      icon: <Text style={{ fontSize: 80 }}>🤖</Text>,
    },
  ],

  security: [
    {
      id: 'secure',
      title: 'Your Data is Secure',
      description:
        'We use end-to-end encryption to keep your information safe.',
      icon: <Text style={{ fontSize: 80 }}>🔒</Text>,
    },
    {
      id: 'privacy',
      title: 'Privacy First',
      description: 'We never share your personal data with third parties.',
      icon: <Text style={{ fontSize: 80 }}>🛡️</Text>,
    },
    {
      id: 'control',
      title: "You're in Control",
      description: 'Manage your privacy settings and data preferences anytime.',
      icon: <Text style={{ fontSize: 80 }}>⚙️</Text>,
    },
  ],
};

export function OnboardingDemo() {
  const { hasCompletedOnboarding, completeOnboarding, skipOnboarding } =
    useOnboarding();

  if (hasCompletedOnboarding) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}
      >
        <Text variant='title'>Welcome Back!</Text>
        <Text variant='body'>You've already completed the onboarding.</Text>
      </View>
    );
  }

  return (
    <Onboarding
      steps={OnboardingPresets.welcome}
      onComplete={completeOnboarding}
      onSkip={skipOnboarding}
      showSkip={true}
      showProgress={true}
      swipeEnabled={true}
      primaryButtonText='Get Started'
      skipButtonText='Skip'
      nextButtonText='Next'
      backButtonText='Back'
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review this onboarding implementation and suggest optimizations."
