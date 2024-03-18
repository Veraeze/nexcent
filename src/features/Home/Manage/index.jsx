import style from "./index.module.css"
import {Content} from "./data";
const Manage = () => {
    return(
        <div className={style.mainCont}>
            <h1>Manage your entire community
                <span style={{display: "block"}}>in a single system</span>
            </h1>
            <p>Who is Nextcent suitable for?</p>
            <div className={style.suits}>
                {
                    Content.map((items, index) => {
                        return (
                            <div key={index}>
                                <img src={items.image} alt={""}/>
                                <h2 style={{color: "#4D4D4D"}}>{items.title}</h2>
                                <h4>{items.definition}</h4>
                            </div>

                        )
                    })

                }
            </div>
        </div>
    )
}
export default Manage;