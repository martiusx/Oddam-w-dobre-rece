import StatisticsElement from "./StatisticsElement/StatisticsElement";

const Statistics = function(){
    return(
        <div className="statistics">
            <StatisticsElement 
            quantity={"10"} 
            title={"ODDANYCH WORKÓW"} 
            text={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."}>
            </StatisticsElement>
            <StatisticsElement 
            quantity={"5"} 
            title={"WSPARTYCH ORGANIZACJI"} 
            text={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."}>
            </StatisticsElement>
            <StatisticsElement 
            quantity={"7"} 
            title={"ZORGANIZOWANY ZBIÓREK"} 
            text={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."}>
            </StatisticsElement>
        </div>
    )
}

export default Statistics;