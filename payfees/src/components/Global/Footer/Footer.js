import classes from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={classes.frame62}>
        <div className={classes.frame61}>
            <div className={classes.frame59}>
                <div className={classes.text1}>
                Subscribe to stay tuned for latest updates. 
                </div>
                <div className={classes.frame58}>
                    <div className={classes.grp}>
                            <input className={classes.frame73} placeholder="Enter your email address to join our newletter" />
                    </div>
                    <button className={classes.frame57}>Join
                    </button>
                </div>
            </div>
            <div className={classes.frame60}>
            <div className={classes.s1}>Help</div>
            <div className={classes.s1}>Terms of use</div>
            <div className={classes.s1}>Privacy policy</div>
            </div>
        </div>
        <div className={classes.text2}>
        Payfees is a global payment solutions platform on a mission to improve the tuition payment experience for international students and eliminate transaction limitations.
        PayFees Inc. is a registered company in Canada.Registration Number: 1504769-2.
        </div>
        </div>
    );
};
export default Footer;