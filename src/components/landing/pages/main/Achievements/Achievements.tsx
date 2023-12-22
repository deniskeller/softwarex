import React from 'react';
import s from './Achievements.module.scss';
import { BaseContainer, BaseIcon } from '@base/index';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

const Achievements: React.FC = () => {
  return (
    <section className={s.Achievements}>
      <BaseContainer className={s.Achievements_Container}>
        <BaseIcon
          viewBox="0 0 124 124"
          icon={ALL_ICONS.STAR}
          className={`${s.Achievements_Star} ${s.Achievements_Star__1}`}
        />
        <BaseIcon
          viewBox="0 0 124 124"
          icon={ALL_ICONS.STAR}
          className={`${s.Achievements_Star} ${s.Achievements_Star__2}`}
        />

        <Image
          src="/pictures/images/main/achievements.png"
          width={760}
          height={654}
          alt="Engineers"
          className={s.Achievements_Image}
        />

        <div className={s.Achievements_List}>
          <div className={s.AchievementItem}>
            <div className={s.AchievementItem_Value}>
              <span>80</span>
            </div>
            <div className={s.AchievementItem_Label}>People on the team</div>
          </div>

          <div className={s.AchievementItem}>
            <div className={s.AchievementItem_Value}>
              <span>15</span>
            </div>
            <div className={s.AchievementItem_Label}>Years on the market</div>
          </div>

          <div className={s.AchievementItem}>
            <div className={s.AchievementItem_Value}>
              <span>21+</span>
            </div>
            <div className={s.AchievementItem_Label}>Awards</div>
          </div>

          <div className={s.AchievementItem}>
            <div className={s.AchievementItem_Value}>
              <span>300+</span>
            </div>
            <div className={s.AchievementItem_Label}>Projects</div>
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default Achievements;
