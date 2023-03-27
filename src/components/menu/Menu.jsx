import React, { useState } from 'react'
import './menu.css'

function Menu({ tasks }) {
    const [toggle, settoggle] = useState(false);
    return (
        <div className="menu">
            <div className={(toggle) ? (`menu_top`) : (`menu_top_btn_arrow`)}>
                <div className={(toggle) ? (`menu_title`) : `hide`}>Journey Board</div>
                <button type='button' className='arrow_btn' onClick={() => { settoggle((oldState) => oldState = !oldState) }}><span class={(toggle) ? (`material-symbols-outlined arrow_icon`) : (`material-symbols-outlined arrow_icon_rotate`)}>arrow_right_alt</span></button>
            </div>
            <div className="menu_list">
                {
                    (toggle) ? (
                        tasks.map((e) => {
                            console.log(e);
                            const { task_id, task_title, assets } = e;
                            return (
                                <ul className={(toggle) ? (`menu_list`) : (`hide`)} key={task_id}>
                                    <li className="li_menu h2"><button type='button' className='menu_list_title_btn'>{task_title}</button></li>
                                    <div className="listofli">
                                        {
                                            assets.map((ei) => {
                                                const { asset_title } = ei;
                                                return (
                                                    <li className="li_menu">{asset_title}</li>
                                                )
                                            })
                                        }
                                    </div>
                                </ul>
                            )
                        })
                        // <ul className={(toggle) ? (`menu_list`) : (`hide`)}>
                        //     <li className="li_menu h2"><button type='button' className='menu_list_title_btn'>Explore the world of management</button></li>
                        //     <div className="listofli">
                        //         <li className="li_menu">Technical Project Management</li>
                        //         <li className="li_menu">Threadbuild</li>
                        //         <li className="li_menu">Structure you pointers</li>
                        //         <li className="li_menu">4SA Method</li>
                        //     </div>
                        // </ul>
                    ) : (
                        tasks.map((e, id) => {
                            const { tasks_id } = e;
                            return (<div className="box" key={tasks_id} >{id + 1}</div>)
                        })
                    )
                }
            </div>
        </div >
    )
}

export default Menu