import Link from 'next/link'
import styles from '@/styles/Home.module.css'


export const Header = ()=>{
    return(
        <>
            <header>
                <div id="top_nav" className="l-row b-black">
                    <div className="l-block l-np">
                        <ul id="black_bar" className="f-nav">
                            <li>
                                <p id="Contact">На рынке с 2020 года</p>
                            </li>
                            <li className="LogIn">
                                {/*<Link href="https://account.ninjatrader.com/welcome" target="_blank" id="LogInL">Log In</Link>*/}
                            </li>
                            <li className="account"><Link href="/" target="_self">На главную</Link></li>
                        </ul>
                    </div>
                </div>

                <div id="bottom_nav" className="l-row b-white">
                    <div className="l-block l-np">
                        <ul id="main_nav" className="f-nav">
                            <li id="logo">
                                <Link href="/">GeneralStonks</Link>
                            </li>
                            <li>
                                <span className="header">Услуги</span>
                                <div id="brokerageM" className="l-twelve DDM">
                                    <div className="l-twelve bdrBLGray l-pb1-5">
                                        <Link href="/automatic" target="_self" className="ddmBlock l-twelve">
                                            <p className="l-twelve t-base f-bold t-center">Автоматизированная торговля</p>
                                            <p className="l-twelve f-size14 f-l-height18">Программа торгует на Binance Futures за вас, зарабатывая от 7 до 60% каждый день </p>
                                        </Link>
                                    </div>
                                    <div className="l-four l-mt1-5">
                                        <Link href="/limited-stonks" target="_self" className="l-twelve ddmBlock">
                                            <p className="l-twelve t-base f-bold t-left">Сигналы Limited</p>
                                            <p className="l-twelve f-size14 f-l-height18 t-left">Программа дает вам точки входа</p>
                                        </Link>
                                    </div>

                                    <div className="l-four l-mt1-5">
                                        <Link href="/vip-stonks" target="_self" className="l-twelve ddmBlock">
                                            <p className="l-twelve t-base f-bold t-left">Сигналы Vip</p>
                                            <p className="l-twelve f-size14 f-l-height18 t-left">Программа ведет сделку, вы только повторяете</p>
                                        </Link>
                                    </div>

                                    <div className="l-four l-nmr l-mt1-5">
                                        <Link href="/book" target="_self"
                                           className="l-twelve ddmBlock">
                                            <p className="l-twelve t-base f-bold t-left">Обучение</p>
                                            <p className="l-twelve f-size14 f-l-height18 t-left">Трейдинг на примерах. Максимум практики</p>
                                        </Link>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <span className="header">Инструкции</span>
                                <div id="platformM" className="l-twelve DDM">
                                    <div className="l-twelve bdrBLGray l-pb1-5">
                                        <div className="l-four">
                                            <Link href="/graphics" target="_self" className="l-twelve ddmBlock">
                                                <p className="l-twelve t-base f-bold t-left">Графики</p>
                                                <p className="l-twelve f-size14 f-l-height18 t-left">Раскрываем торговые
                                                    движения</p>
                                            </Link>

                                        </div>
                                        <div className="l-four">
                                            <Link href="/Build" target="_self" className="l-twelve ddmBlock">
                                                <p className="l-twelve t-base f-bold t-left">Сигналы</p>
                                                <p className="l-twelve f-size14 f-l-height18 t-left">Как пользоваться торговлей по сигналам</p>
                                            </Link>
                                        {/*    <Link href="/Trade" target="_self" className="l-twelve ddmBlock">*/}
                                        {/*        <p className="l-twelve t-base f-bold t-left">Trade</p>*/}
                                        {/*        <p className="l-twelve f-size14 f-l-height18 t-left">What you want, how*/}
                                        {/*            you want</p>*/}
                                        {/*    </Link>*/}
                                        </div>
                                        {/*<div className="l-four l-nmr">*/}
                                        {/*    <Link href="/Trading-Indicators" target="_self" className="l-twelve ddmBlock">*/}
                                        {/*        <p className="l-twelve t-base f-bold t-left">Personalize</p>*/}
                                        {/*        <p className="l-twelve f-size14 f-l-height18 t-left">1000s of 3rd party*/}
                                        {/*            add-ons</p>*/}
                                        {/*    </Link>*/}
                                        {/*    <Link href="/Choice" target="_self" className="l-twelve ddmBlock">*/}
                                        {/*        <p className="l-twelve t-base f-bold t-left">Choice</p>*/}
                                        {/*        <p className="l-twelve f-size14 f-l-height18 t-left">Wide selection of*/}
                                        {/*            brokers</p>*/}
                                        {/*    </Link>*/}
                                        {/*</div>*/}
                                    </div>

                                    {/*<Link href="/learning-trade" target="_self" className="ddmBlock l-twelve l-mt1-5">*/}
                                    {/*    <p className="l-twelve t-base f-bold t-center">Сигналы</p>*/}
                                    {/*    <p className="l-twelve f-size14 f-l-height18">Как пользоваться торговлей по сигналам</p>*/}
                                    {/*</Link>*/}
                                </div>
                            </li>

                            <li>
                                <span className="header">Поддержка</span>
                                {/*<div id="helpM" className="l-twelve DDM">*/}
                                {/*    <a href="/Help" target="_self" className="ddmBlock l-twelve l-mb1-5">*/}
                                {/*        <p className="l-twelve t-base f-bold t-center">Contact Support</p>*/}
                                {/*    </a>*/}
                                {/*    <div className="l-twelve bdrTLGray l-pt3 sl_swap" id="sf2">*/}
                                {/*        <div className="l-four">*/}
                                {/*            <p className="l-twelve l-nmb l-plr1 l-pth t-base f-bold t-center">Platform</p>*/}
                                {/*            <Link href="/Help-Connection-Guides" target="_self"*/}
                                {/*               className="ddmBlockInline l-twelve">*/}
                                {/*                <p className="l-twelve f-size14 t-center">Help Guides</p>*/}
                                {/*            </Link>*/}
                                {/*            <Link href="https://ninjatrader.com/support/forum/index.php" target="_self"*/}
                                {/*               className="ddmBlockInline l-twelve" rel="noopener">*/}
                                {/*                <p className="l-twelve f-size14 t-center">Support Forum</p>*/}
                                {/*            </Link>*/}
                                {/*            <Link href="/PlatformDirect" target="_self"*/}
                                {/*               className="ddmBlockInline l-twelve">*/}
                                {/*                <p className="l-twelve f-size14 t-center">Existing User Download</p>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*        <div className="l-four">*/}
                                {/*            <p className="l-twelve l-nmb l-plr1 l-pth t-base f-bold t-center">Training</p>*/}
                                {/*            <Link href="/Video-Guides" target="_self" className="ddmBlockInline l-twelve">*/}
                                {/*                <p className="l-twelve f-size14 t-center">Video Guides</p>*/}
                                {/*            </Link>*/}
                                {/*            <a href="/events/" target="_self" className="ddmBlockInline l-twelve">*/}
                                {/*                <p className="l-twelve f-size14 t-center">Livestreams</p>*/}
                                {/*            </a>*/}
                                {/*            <Link href="/blog/" target="_self" className="ddmBlockInline l-twelve"*/}
                                {/*               rel="noopener">*/}
                                {/*                <p className="l-twelve f-size14 t-center">Blog</p>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*        <div className="l-four l-nmr">*/}
                                {/*            <p className="l-twelve l-nmb l-plr1 l-pth t-base f-bold t-center">Brokerage</p>*/}
                                {/*            <Link href="/ContactUs#TradeDesk" target="_self"*/}
                                {/*               className="ddmBlockInline l-twelve">*/}
                                {/*                <p className="l-twelve f-size14 t-center">Emergency Trade Desk</p>*/}
                                {/*            </Link>*/}
                                {/*            <Link href="/AccountManagement" target="_self"*/}
                                {/*               className="ddmBlockInline l-twelve">*/}
                                {/*                <p className="l-twelve f-size14 t-center">Account Management</p>*/}
                                {/*            </Link>*/}
                                {/*            <Link href="https://ninjatrader.com/blog/trade-desk-calendar/" target="_self"*/}
                                {/*               className="ddmBlockInline l-twelve" rel="noopener">*/}
                                {/*                <p className="l-twelve f-size14 t-center">Trade Desk Calendar</p>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="mobile_nav" className="l-row b-black">
                    <div className="l-block l-np">
                        <ul id="mobile_nav_menu">
                            <li id="mobile_nav_menu_trigger">
                                <p className="trg"></p>
                                <div id="mobileM" className="l-twelve DDM is-invisible">
                                    <Link href="#" className="ddmBlock toggleSM">Brokerage</Link>
                                    <div className="toggleSMC is-invisible">
                                        <Link href="/Futures" target="_self" className="ddmBlock">Trade Futures</Link>
                                        <Link href="/Micro-Emini-Futures" target="_self" className="ddmBlock">Micro
                                            E-minis</Link>
                                        <Link href="/Micro-Crude-Oil-Futures" target="_self" className="ddmBlock">Micro
                                            Crude Oil</Link>
                                        <Link href="/Nano-Bitcoin-Futures.php" target="_self" className="ddmBlock">Nano
                                            Bitcoin</Link>
                                    </div>
                                    <Link href="/" className="ddmBlock toggleSM">Platform</Link>
                                    <div className="toggleSMC is-invisible">
                                        <Link href="/BuyPlatform" target="_self" className="ddmBlock">Pricing</Link>
                                        <Link href="/graphics" target="_self" className="ddmBlock">Графики</Link>
                                        <Link href="/Simulate" target="_self" className="ddmBlock">Simulate</Link>
                                        <Link href="/Trading-Indicators" target="_self"
                                           className="ddmBlock">Personalize</Link>
                                        <Link href="/Build" target="_self" className="ddmBlock">Develop</Link>
                                        <Link href="/Trade" target="_self" className="ddmBlock">Trade</Link>
                                        <Link href="/Choice" target="_self" className="ddmBlock">Choice</Link>
                                    </div>
                                    <Link href="#" className="ddmBlock toggleSM">Help</Link>
                                    <div className="toggleSMC is-invisible">
                                        <Link href="/Help" target="_self" className="tl">Contact Support</Link>
                                        <p>Platform</p>
                                        <Link href="/Help-Connection-Guides" target="_self" className="ddmBlock ind">Help
                                            Guides</Link>
                                        <Link href="/support/forum/index.php" target="_self" className="ddmBlock ind">Support
                                            Forum</Link>
                                        <Link href="/PlatformDirect" target="_self" className="ddmBlock ind">Existing User
                                            Downloads</Link>
                                        <p className="l-mt1">Training</p>
                                        <Link href="/events/" target="_self" className="ddmBlock ind">Livestreams</Link>
                                        <Link href="/Video-Guides" target="_self" className="ddmBlock ind">Video Guides</Link>
                                        <Link href="/blog/" target="_self" className="ddmBlock ind" rel="noopener">Blog</Link>
                                        <p className="l-mt1">Brokerage</p>
                                        <Link href="/ContactUs#TradeDesk" target="_self" className="ddmBlock ind">Emergency
                                            Trade Desk</Link>
                                        <Link href="/AccountManagement" target="_self" className="ddmBlock ind">Account
                                            Management</Link>
                                        <Link href="/blog/trade-desk-calendar/" target="_self" className="ddmBlock ind">Trade
                                            Desk Calendar</Link>
                                    </div>
                                    <Link href="//getstarted.ninjatrader.com" target="_self" className="ddmBlock">Open
                                        Account</Link>
                                    <Link href="https://account.ninjatrader.com/" target="_self" className="ddmBlock">Log
                                        In</Link>
                                    <Link href="/ContactUs" target="_self" className="ddmBlock">Contact</Link>
                                    <Link href="/" target="_self" className="ddmBlock toggleSM">English</Link>
                                    <div id="languageM-M" className="toggleSMC is-invisible sl_opaque">
                                        <a href="/ " target="_self" className="ddmBlock">English</a>
                                        <a href="/de/" target="_self" className="ddmBlock">Deutsch</a>
                                        <a href="/es/" target="_self" className="ddmBlock">Español</a>
                                        <a href="/fr/" target="_self" className="ddmBlock">French</a>
                                        <a href="/it/" target="_self" className="ddmBlock">Italiano</a>
                                        <a href="/pt/" target="_self" className="ddmBlock">Português</a>
                                        <a href="/ru/" target="_self" className="ddmBlock">Русский</a>
                                    </div>
                                </div>
                            </li>
                            <li id="logo">
                                <Link href="/">GeneralStonks</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}