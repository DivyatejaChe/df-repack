import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CalendarList, CalendarUtils, DateData} from 'react-native-calendars';
import {MD3Colors} from 'react-native-paper';

const INITIAL_DATE = CalendarUtils.getCalendarDateString(new Date());

const CalendarScreen = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
      },
      [INITIAL_DATE]: {
        selected: true,
        selectedColor: MD3Colors.primary50,
      },
    };
  }, [selected]);

  const onDayPress = useCallback((day: DateData) => {
    setSelected(day.dateString);
  }, []);

  return (
    <View style={styles.container}>
      <CalendarList
        horizontal={true}
        pagingEnabled={true}
        hideExtraDays={false}
        current={INITIAL_DATE}
        markedDates={marked}
        onDayPress={onDayPress}
        theme={{
          backgroundColor: 'black',
          textSectionTitleColor: 'black',
          dayTextColor: 'black',
          monthTextColor: 'black',
          indicatorColor: 'black',
          selectedDayBackgroundColor: MD3Colors.secondary50,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fab: {
    position: 'absolute',
    right: 0,
    margin: 16,
    bottom: 0,
  },
});

export default CalendarScreen;
