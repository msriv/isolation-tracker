import CheckCircle from "../assets/icons/check-circle.svg";

const DayItem = (props) => {

    const { day } = props;

    return (
        <div className="mx-4 px-4 py-3 space-y-2 border border-gray-400 rounded-lg flex flex-col items-center justify-between">
            <CheckCircle className="w-8 h-8 text-gray-400"/>
            <span className="text-gray-400">{ day }</span>
        </div>
    )
}

const DayTracker = ({}) => {

    let dayRange = [];

    for(var i = 1; i <= 14; i++){
        dayRange[i] = i;
    }

    return (
        <div className="flex overflow-x-scroll">
            {dayRange.map((item, idx) => <DayItem key={idx} day={idx} />)}
        </div>
        
    )
}

export default DayTracker;