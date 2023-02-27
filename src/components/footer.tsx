import Link from 'next/link'
import styles from '@/styles/Home.module.css'


export const Footer = ()=>{
    return(
        <>
            <footer>
                <div className="l-row">
                    <div className="l-block">
                        <p className="l-twelve l-mb1">Copyright <sup>©</sup> 2018. Все права защищены. StonksPro and the
                            StonksPro logo. Reg. U.S. Pat. & Tm.</p>
                        <p className="l-twelve l-mb1">Торговля фьючерсами, иностранной валютой и опционами сопряжена со
                            значительным риском. Прошлые показатели не обязательно свидетельствуют о будущих
                            результатах.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}