<template>
  <HeaderMenu :dark-font="true" />
  <div class="privacy-container max-w-4xl mx-auto px-8">
    <h1 class="text-3xl font-bold mb-8 pt-28">Privacy Policy</h1>
    <p class="text-sm text-gray-600 mb-8">Last updated: January 31, 2025</p>

    <div class="space-y-6">
      <section>
        <p class="mb-4">
          This Privacy Policy describes Our policies and procedures on the collection,
          use and disclosure of Your information when You use the Service and tells You
          about Your privacy rights and how the law protects You.
        </p>
        <p class="mb-4">
          We use Your Personal data to provide and improve the Service. By using the
          Service, You agree to the collection and use of information in accordance with
          this Privacy Policy.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>

        <h3 class="text-xl font-semibold mb-3">Interpretation</h3>
        <p class="mb-4">
          The words of which the initial letter is capitalized have meanings defined
          under the following conditions. The following definitions shall have the same
          meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 class="text-xl font-semibold mb-3">Definitions</h3>
        <div class="space-y-3">
          <div v-for="(definition, index) in definitions" :key="index">
            <p class="font-medium">{{ definition.term }}:</p>
            <p class="ml-4">{{ definition.description }}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Collecting and Using Your Personal Data</h2>

        <h3 class="text-xl font-semibold mb-3">Types of Data Collected</h3>

        <h4 class="text-lg font-semibold mb-2">Personal Data</h4>
        <p class="mb-4">
          While using Our Service, We may ask You to provide Us with certain personally
          identifiable information that can be used to contact or identify You.
          Personally identifiable information may include, but is not limited to:
        </p>
        <ul class="list-disc ml-6 mb-4">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Usage Data</li>
        </ul>

        <h4 class="text-lg font-semibold mb-2">Usage Data</h4>
        <p class="mb-4">
          Usage Data is collected automatically when using the Service.
        </p>
        <p class="mb-4">
          Usage Data may include information such as Your Device's Internet Protocol
          address (e.g. IP address), browser type, browser version, the pages of our
          Service that You visit, the time and date of Your visit, the time spent on
          those pages, unique device identifiers and other diagnostic data.
        </p>
        <p class="mb-4">
          When You access the Service by or through a mobile device, We may collect
          certain information automatically, including, but not limited to, the type of
          mobile device You use, Your mobile device unique ID, the IP address of Your
          mobile device, Your mobile operating system, the type of mobile Internet
          browser You use, unique device identifiers and other diagnostic data.
        </p>

        <h4 class="text-lg font-semibold mb-2">Information from Third-Party Social Media Services</h4>
        <p class="mb-4">
          The Company allows You to create an account and log in to use the Service
          through the following Third-party Social Media Services:
        </p>
        <ul class="list-disc ml-6 mb-4">
          <li>Google</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>

        <h4 class="text-lg font-semibold mb-2">Tracking Technologies and Cookies</h4>
        <p class="mb-4">
          We use Cookies and similar tracking technologies to track the activity on Our
          Service and store certain information. Tracking technologies used are beacons,
          tags, and scripts to collect and track information and to improve and analyze
          Our Service.
        </p>

        <p class="mb-4">
          You can instruct Your browser to refuse all Cookies or to indicate when a
          Cookie is being sent. However, if You do not accept Cookies, You may not be
          able to use some parts of our Service.
        </p>

        <p class="mb-4">
          Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on
          Your personal computer or mobile device when You go offline, while Session
          Cookies are deleted as soon as You close Your web browser.
        </p>

        <div class="ml-4">
          <h5 class="font-semibold mt-4">Necessary / Essential Cookies</h5>
          <p class="mb-2">Type: Session Cookies</p>
          <p class="mb-2">Administered by: Us</p>
          <p class="mb-4">
            Purpose: These Cookies are essential to provide You with services available
            through the Website and to enable You to use some of its features. Without
            these Cookies, the services that You have asked for cannot be provided, and
            We only use these Cookies to provide You with those services.
          </p>

          <h5 class="font-semibold mt-4">Functionality Cookies</h5>
          <p class="mb-2">Type: Persistent Cookies</p>
          <p class="mb-2">Administered by: Us</p>
          <p class="mb-4">
            Purpose: These Cookies allow us to remember choices You make when You use
            the Website, such as remembering your login details or language preference.
            The purpose of these Cookies is to provide You with a more personal
            experience and to avoid You having to re-enter your preferences every time
            You use the Website.
          </p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Use of Your Personal Data</h2>
        <p class="mb-4">The Company may use Personal Data for the following purposes:</p>
        <ul class="list-disc ml-6 mb-4">
          <li class="mb-2">To provide and maintain our Service, including to monitor the usage of our Service.</li>
          <li class="mb-2">To manage Your Account: to manage Your registration as a user of the Service.</li>
          <li class="mb-2">For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
          <li class="mb-2">To contact You: By email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
          <li class="mb-2">To provide You with news, special offers and general information about other goods, services and events.</li>
          <li class="mb-2">To manage Your requests: To attend and manage Your requests to Us.</li>
          <li class="mb-2">For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition.</li>
          <li>For other purposes: Such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Retention of Your Personal Data</h2>
        <p class="mb-4">
          The Company will retain Your Personal Data only for as long as is necessary
          for the purposes set out in this Privacy Policy. We will retain and use Your
          Personal Data to the extent necessary to comply with our legal obligations,
          resolve disputes, and enforce our legal agreements and policies.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Transfer of Your Personal Data</h2>
        <p class="mb-4">
          Your information, including Personal Data, is processed at the Company's
          operating offices and in any other places where the parties involved in the
          processing are located. Your consent to this Privacy Policy followed by Your
          submission of such information represents Your agreement to that transfer.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Delete Your Personal Data</h2>
        <p class="mb-4">
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You. Our Service may give You
          the ability to delete certain information about You from within the Service.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Disclosure of Your Personal Data</h2>

        <h3 class="text-xl font-semibold mb-3">Business Transactions</h3>
        <p class="mb-4">
          If the Company is involved in a merger, acquisition or asset sale, Your
          Personal Data may be transferred. We will provide notice before Your Personal
          Data is transferred and becomes subject to a different Privacy Policy.
        </p>

        <h3 class="text-xl font-semibold mb-3">Law enforcement</h3>
        <p class="mb-4">
          Under certain circumstances, the Company may be required to disclose Your
          Personal Data if required to do so by law or in response to valid requests by
          public authorities.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Security of Your Personal Data</h2>
        <p class="mb-4">
          The security of Your Personal Data is important to Us, but remember that no
          method of transmission over the Internet, or method of electronic storage is
          100% secure. While We strive to use commercially acceptable means to protect
          Your Personal Data, We cannot guarantee its absolute security.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Children's Privacy</h2>
        <p class="mb-4">
          Our Service does not address anyone under the age of 13. We do not knowingly
          collect personally identifiable information from anyone under the age of 13.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Links to Other Websites</h2>
        <p class="mb-4">
          Our Service may contain links to other websites that are not operated by Us.
          If You click on a third party link, You will be directed to that third
          party's site. We strongly advise You to review the Privacy Policy of every
          site You visit.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
        <p class="mb-4">
          We may update Our Privacy Policy from time to time. We will notify You of any
          changes by posting the new Privacy Policy on this page and update the "Last
          updated" date at the top of this Privacy Policy.
        </p>
      </section>

      <section class="mt-8 mb-10">
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
        <p class="mt-2">
          <strong>By email:</strong> <a href="mailto:privacy@gosim.org" class="text-blue-600 hover:underline">privacy@gosim.org</a>
        </p>
      </section>
    </div>
  </div>
  <FooterSection />
</template>

<script>

import HeaderMenu from '@/components/HeaderMenu.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'Privacy',
  components: { FooterSection, HeaderMenu },
  // components: {FooterComponent, Navbar},
  data() {
    return {
      definitions: [
        {
          term: 'Account',
          description: 'A unique account created for You to access our Service or parts of our Service.'
        },
        {
          term: 'Affiliate',
          description: 'An entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'
        },
        {
          term: 'Company',
          description: 'Refers to Global Open-Source Innovation Meetup, Singapore.'
        },
        {
          term: 'Cookies',
          description: 'Small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.'
        },
        {
          term: 'Country',
          description: 'Refers to: Singapore'
        },
        {
          term: 'Device',
          description: 'Any device that can access the Service such as a computer, a cellphone or a digital tablet.'
        },
        {
          term: 'Personal Data',
          description: 'Any information that relates to an identified or identifiable individual.'
        },
        {
          term: 'Service',
          description: 'Refers to the Website.'
        },
        {
          term: 'Service Provider',
          description: 'Any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service.'
        },
        {
          term: 'Third-party Social Media Service',
          description: 'Any website or any social network website through which a User can log in or create an account to use the Service.'
        },
        {
          term: 'Usage Data',
          description: 'Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.'
        },
        {
          term: 'Website',
          description: 'GOSIM.org, accessible from https://gosim.org and https://www.gosim.org'
        },
        {
          term: 'You',
          description: 'The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.privacy-container {
  line-height: 1.6;
}
</style>
