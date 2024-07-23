import './MyWork.css';
import them_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = ()=>{
    return <div id='work' className="mywork">
        <div className="work-title">
            <h1>My latest work</h1>
            <img src={them_pattern} alt="" />
        </div>
        <div className="work-container">
            {mywork_data.map((work, index)=>{
                return <img src={work.w_img}></img>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon } alt="" />
        </div>
    </div>
}
export default MyWork;