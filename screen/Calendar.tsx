import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {
    Calendar, 
    CalendarList, 
    Agenda,
    LocaleConfig
} from 'react-native-calendars';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

LocaleConfig.locales['ko'] = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    dayNamesShort: ['월', '화', '수', '목', '금', '토', '일']
   
};
LocaleConfig.defaultLocale = 'ko';

function CalendarComp() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View
            style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                style={{
                    borderWidth: 1,
                    borderColor: 'gray'
                }}
                dayComponent={({date, state}) => {
                    return (    //해당 컴포넌트에 prop 변경되면 전부 리렌더링 하므로 아래를 컴포넌트 클래스로 만들어 shouldComponentUpdate()에서 prop 같을땐 리렌더링 안하게 막는다
                        <View>
                            <Text style={{
                                height: 40,
                                textAlign: 'center', 
                                color: state === 'disabled' ? 'gray' : 'black'
                            }}>{date?.day}</Text>
                        </View>
                    );
                }}
                theme={{
                    // arrowColor: 'blue',
                    // stylesheet: {
                    //     calendar: {
                    //         header: {
                    //             header: {
                    //                 flexDirection: 'row',
                    //                 justifyContent: 'space-between',
                    //                 paddingLeft: 10,
                    //                 paddingRight: 10,
                    //                 marginTop: 60,
                    //                 alignItems: 'center',
                    //             },
                    //             week: {
                    //                 marginTop: 50,
                    //                 marginLeft: 10,
                    //                 marginRight: 10,
                    //                 flexDirection: 'row',
                    //                 justifyContent: 'space-between'
                    //             },
                    //             dayHeader: {
                    //                 marginTop: 2,
                    //                 marginBottom: 7,
                    //                 width: 32,
                    //                 textAlign: 'center'
                    //             }
                    //         }
                    //     }
                    // }
                    // @ts-expect-error : 위에 주석처리 처럼 객체로 넘기면 동작 안함. 해당 어노테이션 붙여서 에러 무시
                    'stylesheet.calendar.header': {
                        header: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 10,
                            paddingRight: 10,
                            marginTop: 6,
                            alignItems: 'center',
                        },
                        week: {
                            marginTop: 5,
                            marginLeft: 10,
                            marginRight: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        },
                        dayHeader: {
                            marginTop: 2,
                            marginBottom: 7,
                            width: 32,
                            textAlign: 'center'
                        }
                    }
                }}
            />
        </View>
    );
}

export default CalendarComp;