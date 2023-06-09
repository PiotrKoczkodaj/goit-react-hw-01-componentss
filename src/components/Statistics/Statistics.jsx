import styles from './Statistics.module.css';
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
   
    return (
<section className={styles.statistics}>
<h2 className="title">{title}</h2>
  <ul className={styles.statList}>
    {stats.map(stat => (
                <li key={stat.id} className={styles.item}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}%</span>
    </li>
  ))}
  </ul>
</section>

    )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats:PropTypes.array.isRequired
}