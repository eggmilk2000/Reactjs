interface Content {
    icon: string,
    number: string,
    description: string,
}

interface Content2 {
    icon: string,
    title: string,
    money: string,
    content: string,
    check1: string,
    check2: string,
    check3: string,
    check4: string,
}

export const data1: Content[] = [{
    icon: "fa fa-microphone",
    number: "36+",
    description: "Unique Session"
},
{
    icon: "fa fa-user",
    number: "12",
    description: "Amazing Speaker"
},
{
    icon: "fa fa-coffee",
    number: "45",
    description: "Food Stalls"
},
{
    icon: "fa fa-book",
    number: "2350+",
    description: "Books Available"
}
];

export const data2: Content2[] = [{
    icon: "fa fa-bicycle",
    title: "Basic",
    money: "100$",
    content: "01 seat",
    check1: "fa fa-check",
    check2: "fa fa-times",
    check3: "fa fa-times",
    check4: "fa fa-times"
},
{
    icon: "fa fa-car",
    title: "Standard",
    money: "200$",
    content: "02 seat",
    check1: "fa fa-check",
    check2: "fa fa-check",
    check3: "fa fa-times",
    check4: "fa fa-times"
},
{
    icon: "fa fa-rocket",
    title: "Premium",
    money: "300$",
    content: "02 seat",
    check1: "fa fa-check",
    check2: "fa fa-check",
    check3: "fa fa-check",
    check4: "fa fa-check"
},
]
