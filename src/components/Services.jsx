import { useEffect } from 'react';
import styles from './Services.module.css';
import { FaCheck } from 'react-icons/fa'; 

const Services = () => {
    useEffect(() => {
        // Scroll animation on component mount
        const scrollContainer = document.getElementById('services-container');
        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: scrollContainer.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, []);

    return (
        <div id="services-container" className={styles.servicesContainer}>
            <div className={styles.scroll}>
                <div className={styles.scrollContent}>
                    <h2>Services Offered</h2>
                    <ul className={styles.servicesList}>
                        <li><FaCheck className={styles.tickIcon} /> Web Development</li>
                        <li><FaCheck className={styles.tickIcon} /> Mobile App Development</li>
                        <li><FaCheck className={styles.tickIcon} /> Network Engineering</li>
                        <li><FaCheck className={styles.tickIcon} /> Software Consulting</li>
                        <li><FaCheck className={styles.tickIcon} /> Database Management</li>
                        <li><FaCheck className={styles.tickIcon} /> Cloud Solutions(Azure)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Services;

