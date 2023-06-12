import { useContext } from 'react'
import styles from './FilterChip.module.css'
import { UserContext } from '../../App'
import { useNavigate } from 'react-router-dom';
export default
function FilterChip(props){

    const {setFilterSelected} = useContext(UserContext);
    const navigate = useNavigate();

    const {name, isSelected} = props;

    const handleClick = ()=>{
        // console.log('setting filter');
        setFilterSelected(name);
        // navigate('/');
        props.handleClick(name);
    }
    // console.log('checking props', props);
    if(isSelected)
    console.log(name, 'is selected');

    return(
        <div className={`${styles.main} ${isSelected && styles.selected}`} onClick={handleClick}>
            {name}
        </div>
    )
}