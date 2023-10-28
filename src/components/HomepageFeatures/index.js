import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Notes | 笔记',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我的笔记，包含SLAM、算法、PCL、路径规划、强化学习、网络工程、Web开发等内容。
      </>
    ),
  },
  {
    title: 'Blog | 博客',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        我的博客
      </>
    ),
  },
  {
    title: 'VistaLab | 远景',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        远景机器人实验室-实现你的创意与梦想
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
