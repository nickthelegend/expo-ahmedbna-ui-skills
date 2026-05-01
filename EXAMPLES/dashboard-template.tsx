import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { LineChart } from '@/components/ui/charts/line-chart';
import { BarChart } from '@/components/ui/charts/bar-chart';
import { ScrollView } from 'react-native';
import React from 'react';

export default function DashboardTemplate() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text variant="title" style={{ marginBottom: 20 }}>Analytics Overview</Text>
      
      <View style={{ gap: 16 }}>
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart 
              data={[120, 450, 300, 700, 500, 900]} 
              height={200}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={[10, 25, 45, 30, 60, 80]} 
              height={200}
            />
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
