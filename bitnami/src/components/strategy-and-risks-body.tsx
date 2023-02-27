import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Image from "next/image";

import Script from 'next/script'

export const StrategyAndRisksBody = ()=>{
    return(
        <>
            <div className="l-row b-white">
                <div className="l-block ffHero">
                    <div className="l-eight">
                        <h1 className="t-left l-m-mt1">Понимание риска</h1>
                        <p className="l-eleven t-left l-mb1">Важно, чтобы трейдеры, работающие на рынках с высокой долей
                            заемных средств, понимали риски, связанные с торговлей фьючерсами, и управляли ими
                            правильно. Так как торговля фьючерсами и другими финансовыми инструментами сопряжена с
                            определенными рисками, необходимо использовать только рисковый капитал.</p>
                        <p className="l-eleven t-left l-mb1">Рисковый капитал – это деньги, отложенные для спекулятивных
                            целей, которые могут быть потеряны в процессе торговли. Такой капитал обычно используется
                            для инвестирования с высоким риском и высокой прибылью. Важно, чтобы его потеря не причинила
                            существенного вреда для инвестора.</p>
                        <p className="t-left l-nmb">
                            <Link href="https://t.me/general_stonks" target="_self"
                               className="redFlat l-left f-size32">Начать торговать</Link>
                        </p>
                    </div>
                    <div className="l-four l-nmr">
                        <picture>
                            <source type="image/webp" srcSet="/Single_Angled-2.png"/>
                                <source type="image/jpeg" srcSet="/Single_Angled-2.png"/>
                                    <Image src="/Single_Angled-2.png" alt="Monitor" loading="eager"
                                         width="350" height="354"/>
                        </picture>
                    </div>
                </div>
            </div>

            <div className="l-row b-white">
                <div className="l-block">
                    <h2 className="l-twelve">Правила успеха</h2>
                    <div className="l-three l-p1 bdrR_DGray">
                        <h3 className="l-twelve l-mb1 shadow_3D">ПРАВИЛО 1</h3>
                        <p className="l-twelve l-nmb f-size18 f-l-height24">Идти против тренда значит терять деньги</p>
                    </div>
                    <div className="l-three l-p1 bdrR_DGray">
                        <h3 className="l-twelve l-mb1 shadow_3D">ПРАВИЛО 2</h3>
                        <p className="l-twelve l-nmb f-size18 f-l-height24">Пока не научились ограничивать потери —
                            всегда ставьте стоп!</p>
                    </div>
                    <div className="l-three l-p1 bdrR_DGray">
                        <h3 className="l-twelve l-mb1 shadow_3D">ПРАВИЛО 3</h3>
                        <p className="l-twelve l-nmb f-size18 f-l-height24">При просадке всегда идет пауза и возврат. Не
                            поддавайтест эмоциям.</p>
                    </div>
                    <div className="l-three l-p1 l-nmr">
                        <h3 className="l-twelve l-mb1 shadow_3D">ПРАВИЛО 4</h3>
                        <p className="l-twelve l-nmb f-size18 f-l-height24">Нельзя входить в сделку на все деньги. До
                            10% от депозита.</p>
                    </div>
                </div>
            </div>

            <div className="l-row b-white">
                <div className="l-block">
                    <h2 className="l-twelve f-size40">Что ведет к потере депозита:</h2>
                    <div className="l-six">
                        <ul className="l-twelve l-gTriS">
                            <li>Торговля без анализа</li>
                            <li>Излишняя самоуверенность</li>
                            <li>Нежелание фиксировать убытки</li>
                            <li>Больше риска - больше денег</li>
                        </ul>
                    </div>
                    <div className="l-six l-nmr">
                        <ul className="l-twelve l-gTriS">
                            <li>Борьба с трендом</li>
                            <li>Усреднение позиции</li>
                            <li>Торговля только люмимыми валютами</li>
                            <li>Использование заемных средств</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="l-row b-blue">
                <div className="l-block">
                    <div className="l-eight">
                        <h3 className="t-left c-white l-nmb">Нет базовых знаний?</h3>
                        <p className="l-twelve l-nmb f-size24 f-l-height32 t-left c-white">Книга с нашей методикой
                            торговли! Анализ известных и уникальных паттернов.</p>
                    </div>
                    <div className="l-four l-nmr">
                        <p className="l-twelve l-mt1 l-nmb t-center">
                            <Link
                            href="/book"
                            className="blueOpen View_FC">ПОДРОБНЕЕ</Link></p>
                    </div>
                </div>
            </div>

            <div className="l-block hero" id="Control">
                <div className="l-seven l-right l-mt2x l-nmr">
                    <h2 className="l-mb1 t-left">Почему это выгодно</h2>
                    <p className="t-left">Если бы вы занимались торговлей на рынке Форекс, то получить
                        достоверную информацию о объемах торгов почти невозможно. Однако, при торговле фьючерсными
                        контрактами вы не столкнетесь с такими проблемами. Благодаря точной информации об объемах, можно
                        определить заинтересованность участников рынка и провести четкий технический анализ.
                    </p>
                </div>
            </div>

            <div id="cta" className="l-row">
                <div className="l-block d-grid2C">
                    <div>
                        <h2 className="l-nmb t-center f-bold c-white">ЛУЧШАЯ ПРОГРАММА <span
                            className="d-block f-reg f-ital">для</span> ТОРГОВЛИ ФЬЮЧЕРСАМИ
                        </h2></div>
                    <div>
                        <h3 className="t-center c-white l-mb1">Награда Benzinga 2020 года в категории глобальных
                            финансовых технологий</h3>
                        <p className="t-center c-white l-nmb">Платформа Stonks получила всеобщее признание, благодаря
                            уникальному сочетанию высокоэффективной торговой платформы с выгодными расценками и
                            онлайн-поддержкой.</p>
                    </div>
                </div>
            </div>

            <div className="l-row b-white">
                <div className="l-block">
                    <h2 className="l-twelve l-mb1 t-center">5 причин, по которым трейдеры выбирают фьючерсы</h2>
                    <p>Все больше трейдеров переходят на высоколиквидные фьючерсные рынки на условиях меньших начальных
                        взносов, торгуя при этом на рынках, доступ к которым традиционно можно было получить только
                        через Уолл-стрит.</p>
                    <div className="ghostNContain">
                        <div className="ghostN">
                            <div>1</div>
                            <div>
                                <span className="head">Меньшая сумма необходимых инвестиций</span>
                                <span className="body">Для торговли акциями требуется 5 000 $ на счету, тогда как для торговли фьючерсами необходимо лишь 100 $.</span>
                            </div>
                        </div>
                        <div className="ghostN">
                            <div>2</div>
                            <div>
                                <span className="head">Торгуйте больше с меньшими затратами</span>
                                <span className="body">Большая сумма контрактов при более низком начальном капитале за счет кредитного плеча</span>
                            </div>
                        </div>
                        <div className="ghostN">
                            <div>3</div>
                            <div>
                                <span className="head">Высокая ликвидность</span>
                                <span
                                    className="body">Удобный вход на торги и выход с них при точном контроле времени</span>
                            </div>
                        </div>
                        <div className="ghostN">
                            <div>4</div>
                            <div>
                                <span className="head">Универсальные и централизованные рынки</span>
                                <span className="body">Торговля на тех же рынках, что и на Уолл-стрит, на равных условиях</span>
                            </div>
                        </div>
                        <div className="ghostN">
                            <div>5</div>
                            <div>
                                <span className="head">Круглосуточная торговля</span>
                                <span className="body">Фьючерсами торгуют почти круглосуточно, 7 дней в неделю, что дает больше возможностей</span>
                            </div>
                        </div>
                    </div>
                    <p className="l-twelve l-mt1 l-mbh f-size14 f-l-height16 f-reg">*Кредитное плечо также увеличивает
                        риск, связанный с торговлей фьючерсами; для торговли следует использовать только рисковый
                        капитал.</p>
                    <p className="l-twelve l-nmb f-size14 f-l-height16 f-reg">Несмотря на высокую ликвидность,
                        фьючерсные рынки также могут испытывать резкие колебания цен.</p>
                </div>
            </div>


            <div className="l-row b-white">
                <div className="l-block">
                    <div className="l-six">
                        <h2 className="l-twelve l-mb1 t-left">Сообщите, чем мы можем вам помочь</h2>
                        <p className="l-twelve l-mb1 t-left">Напишите менеджеру в телеграм <Link
                            href="https://t.me/VladislavBrk" className="c-blue">Stonks</Link> для того, чтобы обсудить,
                            какие технологические решения StonksPro подходят именно вам.</p>
                        <p className="l-twelve t-left"><Link href="https://t.me/VladislavBrk" className="redOpen f-size24">СВЯЖИТЕСЬ
                            С МЕНЕДЖЕРОМ</Link></p>
                    </div>
                    <div className="l-six l-nmr t-right">
                        <picture>
                            <source type="image/webp" srcSet="/Futures_ManagedFutures.jpg"/>
                                <source type="image/jpeg" srcSet="/Futures_ManagedFutures.jpg"/>
                                    <Image src="/Futures_ManagedFutures.jpg" alt="Monitor" loading="lazy"
                                         width="533" height="433"/>
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )
}