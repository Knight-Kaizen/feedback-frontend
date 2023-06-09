import styles from './FilterChip.module.css'
export default
function FilterChip(props){

    return(
        <div className={styles.main}>
            {props.name}
        </div>
    )
}