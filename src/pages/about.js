import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styling/components.css';
import conversion_rate from '../assets/about/conversion_rate_inside.jpg';
import seo_inside from '../assets/about/seo_inside.jpg';
import email_marketing from '../assets/about/email-marketing.png';
import optimization from '../assets/about/optimization.png';
import computer from '../assets/about/computer.png';
import display_banner from '../assets/about/banner-main.png';

import copywritingcolor from '../assets/about/copywriting-color.png';
import mobile_marketing from '../assets/about/mobile-marketing.png';
import programming_team from '../assets/about/programming-team.png';
import video_production from '../assets/about/video-production.png';
import web_development from '../assets/about/web-development.png';





function About() {
  // Declare a new state variable, which we'll call "count"
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('welcome')}</h1>

      <p>
        {t('about-1')}
      </p>
      <div className="features">
        <div className="box-feature">
          <h3>{t('own_software')}</h3>
          <p>
            {t('own_software_description')}
          </p>
        </div>
        <div className="box-feature">
          <h3>{t('campaing_optimizers')}</h3>
          <p>
            {t('campaign_optimizers_desc')}
          </p>
        </div>
        <div className="box-feature">
          <h3>{t('total_remarketing_solutions')}</h3>
          <p>
            {t('total_remarketing_solutions_description')}
          </p>
        </div>
        <div className="box-feature">
          <h3>{t('conversion_rate_optimisation')}</h3>
          <p>
            {t('conversion_rate_optimisation_description')}
          </p>
        </div>
      </div>

      <div claasName="marketing-solution">
        <h1>
          {t('online_marketing_solutions')}
        </h1>
        <div className="two-sided-content">
          <div className="image-side">
            <img src={seo_inside} alt="SEO" />
          </div>
          <div className="text-side">
            <h5>Google, Yahoo, Bing, Baidu, Naver</h5>
            <h4>Search Engine Marketing (SEM)</h4>
            <p>
              {t('sem_description')}
            </p>
          </div>
        </div>

        <div className="two-sided-content">
          <div className="text-side">
            <h5>
              AdTactics's Banner Networks, +1,000 millions of placements available
            </h5>
            <h4>
              {t('display_banner_advertising')}
            </h4>
            <p>
              {t('display_banner_advertising_description')}
            </p>


          </div>
          <div className="image-side">
            <img src={display_banner} alt="display banner advertising" />
          </div>
        </div>

        <div className="two-sided-content">
          <div className="image-side">
            <img src={conversion_rate} alt="online marketing solution" />
          </div>
          <div className="text-side">
            <h5>Facebook, Twitter, Linkedin, WeChat, Weibo</h5>
            <h4>Social Media Marketing (SMM)</h4>
            <p>
              {t('social_media_marketing_description')}
            </p>
          </div>
        </div>
      </div>


      <div className="capabilities">
        <div className="capability">
          <img src={optimization} className="icon" alt="capability_icon" />
          <h1>
            {t('search_engine_optimization')}
          </h1>
          <p>
            {t('search_engine_optimization_description')}
          </p>
        </div>
        <div className="capability">
          <img src={mobile_marketing} className="icon" alt="capability_icon" />
          <h1>
            {t('mobile_marketing')}
          </h1>
          <p>
            {t('mobile_marketing_desc')}
          </p>
        </div>
        <div className="capability">
          <img src={email_marketing} className="icon" alt="capability_icon" />
          <h1>
            {t('email_marketing')}
          </h1>
          <p>
            {t('email_marketing_desc')}
          </p>
        </div>
        <div className="capability">
          <img src={web_development} className="icon" alt="capability_icon" />
          <h1>
            Web/App Development
          </h1>
          <p>
            {t('web_development_desc')}
          </p>
        </div>
        <div className="capability">
          <img src={computer} className="icon" alt="capability_icon" />
          <h1>
            {t('creative_design')}
          </h1>
          <p>
            {t('creative_design_desc')}
          </p>
        </div>
        <div className="capability">
          <img src={video_production} className="icon" alt="capability_icon" />
          <h1>
            {t('video_production')}
          </h1>
          <p>
            {t('video_production_desc')}
          </p>
        </div>



      </div>
      <div className="teams">
        <div>
          <img src={programming_team} alt="programming" />
          <h4>
            {t('programming_team')}
          </h4>
          <p>
            {t('programming_team_desc')}
          </p>
        </div>

        <div>
          <img src={copywritingcolor} alt="copywriting" />
          <h4>
            {t('copywriting_team')}
          </h4>
          <p>
            {t('copywriting_team_desc')}

          </p>
        </div>
        <div>
          <img src="" alt="design" />
          <h4>
            {t('design_team')}
          </h4>
          <p>
            {t('design_team_desc')}
          </p>
        </div>
      </div>


    </>
  )
}
export default About
