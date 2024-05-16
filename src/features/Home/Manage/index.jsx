import style from "./index.module.css"
import {Content} from "./data";
const Manage = () => {
    return(
        <div className={style.mainCont}>
            <div className={style.words}>
            <h1>Manage your entire community
                <span style={{display: "block"}}>in a single system</span>
            </h1>
            <p>Who is Nextcent suitable for?</p>
            </div>
            <div className={style.suits}>
                {
                    Content.map((items, index) => {
                        return (
                            <div key={index} className={style.content}>
                                <img src={items.image} alt={""}/>
                                <h2 style={{color: "#4D4D4D", fontSize: "28px"}}>{items.title}</h2>
                                <h4 style={{fontSize: "14px"}}>{items.definition}</h4>
                            </div>

                        )
                    })

                }
            </div>
        </div>
    )
}
export default Manage;