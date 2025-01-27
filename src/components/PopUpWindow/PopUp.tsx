import styles from './popUp.module.css';
import React, { useEffect, useRef} from 'react';
interface PopupProps {
    user: {id: number;
            name: string;
            email: string;
            phone:number;
            address: string;
            hire_date: string;
            position_name: string;
            department: string;
        };
    onClose: () => void;
  }

const PopUp: React.FC<PopupProps> = ({user,onClose}) => {
    const popupRef = useRef<HTMLDivElement | null>(null);
   useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);
    return <>
        <div className={styles.ContainerPopUp}>
            <div className={styles.wrapperPopUp} ref={popupRef}>
                <div className={styles.wrapperPopUpTitle}>
                    <span className={styles.wrapperPopUpTitleName}>{user.name}</span>
                        <svg onClick={onClose}  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z" fill="black" />
                        </svg>
                </div>
                <div className={styles.wrapperPopUpContainer}>
                    <div className={styles.wrapperPopUpSubContainer}>
                        <div className={styles.wrapperPopUpString}>
                            <div className={styles.wrapperPopUpTitleInfo}>
                                <span className={styles.wrapperPopUpSubTitle}>Телефон:</span>
                            </div>
                            <div className={styles.wrapperPopUpTitleInfoData}>
                            <a className={styles.wrapperPopUpText} href={`tel:${user.phone}`}>{user.phone}</a>
                            </div>
                        </div>
                        <div className={styles.wrapperPopUpString}>
                            <div className={styles.wrapperPopUpTitleInfo}>
                                <span className={styles.wrapperPopUpSubTitle}>Почта:</span>
                            </div>
                            <div className={styles.wrapperPopUpTitleInfoData}>
                            <a className={styles.wrapperPopUpText} href={`mailto:${user.email}`} >{user.email}</a>
                            </div>
                        </div>
                        <div className={styles.wrapperPopUpString}>
                            <div className={styles.wrapperPopUpTitleInfo}>
                                <span className={styles.wrapperPopUpSubTitle}>Дата приема:</span>
                            </div>
                            <div className={styles.wrapperPopUpTitleInfoData}>
                                <span className={styles.wrapperPopUpText}>{user.hire_date}</span>
                            </div>
                        </div>
                        <div className={styles.wrapperPopUpString}>
                            <div className={styles.wrapperPopUpTitleInfo}>
                                <span className={styles.wrapperPopUpSubTitle}>Должность:</span>
                            </div>
                            <div className={styles.wrapperPopUpTitleInfoData}>
                                <span className={styles.wrapperPopUpText}>{user.position_name}</span>
                            </div>
                        </div>
                        <div className={styles.wrapperPopUpString}>
                            <div className={styles.wrapperPopUpTitleInfo}>
                                <span className={styles.wrapperPopUpSubTitle}>Подразделение:</span>
                            </div>
                            <div className={styles.wrapperPopUpTitleInfoData}>
                                <span className={styles.wrapperPopUpText}>{user.department}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.wrapperPopUpTitleSubInfo}>
                        <span className={styles.wrapperPopUpSubTitle}>Дополнительная информация:</span>
                        <span className={styles.wrapperPopUpText}>Меня зовут Кленин Евгений, я очень стараюсь, чтобы попасть к вам С:</span>
                </div>
            </div>
        </div>
    </>
}

export default PopUp;