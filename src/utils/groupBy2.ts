import { groupBy } from "./groupBy";

export interface MeetingI {
    date: string;
    bgColor: string;
    txtColor: string;
    place: string
}


export const groupBy2 = () => {
    var meetings: MeetingI[] =
        [
            { date: "2001-01-01", bgColor: "red", txtColor: "red", place: "park" },
            { date: "2001-01-01", bgColor: "red", txtColor: "red", place: "school" },
            { date: "2001-01-02", bgColor: "yellow", txtColor: "yellow", place: "house" }
        ];

    // const dateMap = meetings
    //     .reduce(
    //         (m: any, v) => {
    //             const day = v.date.substring(0, 10)
    //             const entry = m[day]
    //             if (typeof entry === 'undefined') {
    //                 m[day] = [v]
    //             }
    //             else {
    //                 entry.push(v)
    //             }
    //             return m
    //         },
    //         {}
    //     )

    // const res = Object.keys(dateMap).map(d => {
    //     return {
    //         day: d,
    //         bgColor: dateMap[d][0].bgColor,
    //         txtColor: dateMap[d][0].txtColor,
    //         meetings: dateMap[d]
    //     }
    // })

    // console.log("the res =====>", res);

    // --------------------------
    const results = groupBy(meetings, i => i.date);
    let res2 = JSON.parse(JSON.stringify(results));

    const finalResult = Object.keys(res2).map(d => {
        return {
            day: d,
            bgColor: res2[d][0].bgColor,
            txtColor: res2[d][0].txtColor,
            meetings: res2[d]
        }
    })
    console.log("finalResult ===>", finalResult)
    // --------------------------
}

