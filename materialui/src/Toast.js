import React from 'react'

export default function Toast() {
    return (
        <div>
            <div style={toastshow} type="alert" aria-atomic="true">
                <div style={toastheader}>
                    <strong style={mrauto}>Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="close" style={closing} data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div style={toastbody}>
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>
    )
}
const toastshow={
    width:'100%',
    height:'50px',
    backgroundColor:'#C0C0C0',
    border:'1px solid black'
}
const toastheader={
    backgroundColor:'#808080'
}
const mrauto={
    fontSize: '25px'
}
const closing={

}
const toastbody={

}