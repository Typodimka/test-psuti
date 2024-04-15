import React, {useState} from 'react';
import img from './assets/img/image 1.svg';
import {data} from "./data";
import {Grid} from "@mui/material";



function App() {

    const [value, setValue] = useState("")

    const [displays, setDisplays] = useState<string[]>([])


    const clickHandler = () => {
        const copyDisplays: string[] = []

        // Находим ключи объекта, содержащие подстроку value
        const find = Object.keys(data).filter(key => key.includes(value));


        // Если найдены ключи, выбираем первый
        if (find.length > 0) {
            find.forEach((item, i) => {
                const search = data[item];
                copyDisplays.push(`${find[i]}:  ${search}`)
            })

            setDisplays(copyDisplays)


        } else {
            // Обработка случая, когда не найдено ни одного соответствия
            // Например, можно установить пустую строку в setDisplay
            setDisplays([]);
        }
    }

    return (
        <div>
            <div style={{width: "100%", height: "100%"}}>
                <img src={img} alt="" style={{width: "100%", height: "100%"}}/>

            </div>


            <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                display: "flex",
                alignItems: "center"
            }}>
                <input type="text" style={{height: 30, marginTop: 2, borderColor: "#ffffff"}} value={value}
                       onInput={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                />
                <button style={{
                    color: "white",
                    border: "none",
                    backgroundColor: "#efefef",
                    padding: 8,
                    borderRadius: 3,
                    marginLeft: 10,
                    cursor: "pointer",
                    height: 35
                }} type="submit" onClick={clickHandler}>
                    Ответить
                </button>

                <button style={{
                    color: "white",
                    border: "none",
                    backgroundColor: "#efefef",
                    padding: 8,
                    borderRadius: 3,
                    marginLeft: 10,
                    cursor: "pointer",
                    height: 35
                }} type="submit" onClick={() => setDisplays([])}>
                    X
                </button>

            </div>



            <Grid container spacing={2} sx={{p: 2}}>

                {displays.map((item, i) => (
                    <Grid item xs={6}>
                        <p style={{color: "#cecece"}} key={i}>{i + 1}){item}</p>
                    </Grid>

                ))}

            </Grid>

        </div>
    );
}

export default App;
