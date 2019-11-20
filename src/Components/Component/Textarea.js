import React from 'react';
import classes from './Textarea.module.css'

//////////////////////// outdated components \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// export const Textarea = ({input, meta, ...props}) => {  

//     const error = meta.touched && meta.error;

//     return <div className={classes.textarea +  ' ' +  (error && classes.textareaError)  }>
//         <textarea {...input}{...props} />
//         <div>
//             {error && <span>{meta.error}</span>}
//         </div>

//     </div>
// }

// export const Input = ({input, meta, ...props}) => {
//     const error = meta.touched && meta.error;

//     return <div className={classes.textarea +  ' ' +  (error && classes.textareaError)  }>
//         <input  {...input}{...props} />
//         <div>
//             {error && <span>{meta.error}</span>}
//         </div>

//     </div>
// }

//////////////////////// outdated components \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const CommonComponent = ({ input, meta, ...props }) => {
    const error = meta.touched && meta.error;

    return <div className={classes.textarea + ' ' + (error && classes.textareaError)}>
        <props.teg  {...input}{...props} />
        <div>
            {error && <span>{meta.error}</span>}
        </div>

    </div>
}
export const Input = (props) => {
    return <CommonComponent {...props} teg='input' />
}

export const Textarea = (props) => {
    return <CommonComponent {...props} teg='textarea' />
}
