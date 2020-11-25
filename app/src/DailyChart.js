import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { Grid } from '@material-ui/core';


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


const data1 = [
  createData('00:00',12,),
  createData('01:00', 3,),
  createData('02:00', 5,),
  createData('03:00', 16,),
  createData('04:00', 22),
  createData('05:00', 32),
  createData('06:00', 1),
  createData('07:00', 3),
  createData('08:00', 12),
  createData('09:00', 12),
  createData('10:00', 13),
  createData('11:00', 5),
  createData('12:00', 3),
  createData('13:00', 4),
  createData('14:00', 10),
  createData('15:00', 12),
  createData('16:00', 5),
  createData('17:00', 28),
  createData('18:00',12),
  createData('19:00',22),
  createData('20:00', 12),
  createData('21:00', 1),
  createData('22:00',12),
  createData('23:00',4),
  createData('24:00', 7),
];
const data2 = [
  createData('00:00',1,),
  createData('01:00', 13,),
  createData('02:00', 2,),
  createData('03:00', 6,),
  createData('04:00', 2),
  createData('05:00', 2),
  createData('06:00', 3),
  createData('07:00', 3),
  createData('08:00', 32),
  createData('09:00', 42),
  createData('10:00', 43),
  createData('11:00', 35),
  createData('12:00', 42),
  createData('13:00', 48),
  createData('14:00', 23),
  createData('15:00', 18),
  createData('16:00', 15),
  createData('17:00', 8),
  createData('18:00',12),
  createData('19:00',2),
  createData('20:00', 2),
  createData('21:00', 12),
  createData('22:00',5),
  createData('23:00',4),
  createData('24:00',7),
];



export default function DailyChart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data1}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              People
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#00437a" dot={false} strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
      
     <ResponsiveContainer>
      <LineChart
        data={data2}
        margin={{
          top: 16,
          right: 16,
          bottom: 0,
          left: 24,
        }}
      >
        <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
        <YAxis stroke={theme.palette.text.secondary}>
          <Label
            angle={270}
            position="left"
            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
          >
            Cars
          </Label>
        </YAxis>
        <Line type="monotone" dataKey="amount" stroke={'red'} dot={false} strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
       </React.Fragment>
  );
}