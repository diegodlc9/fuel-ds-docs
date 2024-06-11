import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					{/* <Link className="button button--secondary button--lg" to="/docs/intro">
						Docusaurus Tutorial - 5min ⏱️
					</Link> */}
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
			<HomepageHeader />
			<main>
				<div class="p-4 sm:ml-64">
      <section class="container mx-auto">
        <div class="grid grid-cols-12">
          <div class="col-span-12 md:col-span-8 md:col-start-1 pt-10">
            <h1 class="font-bold text-3xl mb-3">
              <small class="text-sm text-primary-blue">How to use</small> <br />
              Get started with MSC Design System
            </h1>
            <p>
              The MSC design system is built on a tailwind css base in its
              version 0.0.0, therefore the components are highly customizable
              although it is not recommended to leave the design system
              guidelines.
            </p>

            <h2 class="font-bold text-xl mt-5">Config File</h2>
            <p>
              in the configuration file we can find defined the following styles
              of the MSC corporate identity
            </p>

            <ul class="list-disc mt-3 pl-10">
              <li>Colors</li>
              <li>Fonts*</li>
              <li>Customized Components</li>
            </ul>

            <h2 class="font-bold text-xl mt-5">How to Setup</h2>
            <p class="mb-2">Here you can see the steps to setup the CDN</p>
            <a
              target="_blank"
              class="flex items-center text-primary-blue"
              href="https://mscdirectjira.atlassian.net/wiki/spaces/PD/pages/2251456570/How+to+get+setup"
            >
              Learn More
              <img src="../../static/icons/chevron-right.svg" class="mt-1 ml-0.5" />
            </a>
            <h2 class="font-bold text-xl mt-5">Batch Release Notes #002</h2>
            <p class="mb-2">
              Here you can see all the components are included and ready to use
              in this release
            </p>
            <a
              target="_blank"
              class="flex items-center text-primary-blue"
              href="https://mscdirectjira.atlassian.net/wiki/spaces/PD/pages/2251784264/Batch+Release+Notes"
            >
              See Notes
              <img src="../../static/icons/chevron-right.svg" class="mt-1 ml-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
			</main>
		</Layout>
	);
}
