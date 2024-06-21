
import "./featuredInfo.css";

export default function FeaturedInfo() {
    return(
        <div className="featuredInfo">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <svg className="featuredIcon negative" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 20L11.6464 20.3536L12 20.7071L12.3536 20.3536L12 20ZM12.5 5C12.5 4.72386 12.2761 4.5 12 4.5C11.7239 4.5 11.5 4.72386 11.5 5L12.5 5ZM5.64645 14.3536L11.6464 20.3536L12.3536 19.6464L6.35355 13.6464L5.64645 14.3536ZM12.3536 20.3536L18.3536 14.3536L17.6464 13.6464L11.6464 19.6464L12.3536 20.3536ZM12.5 20L12.5 5L11.5 5L11.5 20L12.5 20Z" />
                        </svg>
                    </span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">
                        -1.4
                        <svg className="featuredIcon negative" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 20L11.6464 20.3536L12 20.7071L12.3536 20.3536L12 20ZM12.5 5C12.5 4.72386 12.2761 4.5 12 4.5C11.7239 4.5 11.5 4.72386 11.5 5L12.5 5ZM5.64645 14.3536L11.6464 20.3536L12.3536 19.6464L6.35355 13.6464L5.64645 14.3536ZM12.3536 20.3536L18.3536 14.3536L17.6464 13.6464L11.6464 19.6464L12.3536 20.3536ZM12.5 20L12.5 5L11.5 5L11.5 20L12.5 20Z"/>
                        </svg>
                    </span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +2.4
                        <svg className="featuredIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4L11.6464 3.64645L12 3.29289L12.3536 3.64645L12 4ZM12.5 19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19L12.5 19ZM5.64645 9.64645L11.6464 3.64645L12.3536 4.35355L6.35355 10.3536L5.64645 9.64645ZM12.3536 3.64645L18.3536 9.64645L17.6464 10.3536L11.6464 4.35355L12.3536 3.64645ZM12.5 4L12.5 19L11.5 19L11.5 4L12.5 4Z"/>
                        </svg>
                    </span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
        </div>
    );
}
