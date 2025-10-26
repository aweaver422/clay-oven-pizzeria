import {Link} from "react-router-dom";
import "../../css/Home.css";
import "../../css/General.css";
import rewardsImg from "../../images/other/garnishing-pizza.jpg";

const HomeRewards = () => {
    return (
        <section id="content-rewards">
            <section class="columns">  
                    <div id="img-content-rewards" class="one hide-small">
                        <img src={rewardsImg} />
                    </div>
                    <div id="info-content-rewards" class="one">
                        <h2>REWARDS</h2>
                        <p>Join our Rewards Program and start earning delicious benefits every time you order! Members earn points that can be redeemed for exclusive deals, enjoy special reward coupons, and get access to easy mobile ordering for a faster, more convenient pizza experience. Sign up today and make every slice more rewarding!</p>
                    </div>
                </section>
        </section>
    );
};

export default HomeRewards;