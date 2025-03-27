import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import WebView from "react-native-webview";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

const ListItem = ({ title, description }) => {
  return (
    <View style={{ paddingTop: 2, width: "99%" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 5,
          flexWrap: "wrap",
        }}
      >
        <Octicons name="dot" size={15} color="black" style={{ marginTop: 5 }} />
        <Text
          style={{
            textAlign: "justify",
            lineHeight: 23,
            letterSpacing: 1,
            fontSize: 13,
            marginLeft: 5,
            flexShrink: 1, // Ensures it doesn't exceed the screen
            flex: 1, // Takes available space
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{title}:</Text> {description}
        </Text>
      </View>
    </View>
  );
};

const SubListItem = ({ title, description }) => {
  return (
    <View style={{ paddingTop: 1, paddingLeft: 6, width: "99%" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 5,
          flexWrap: "wrap",
        }}
      >
        <MaterialIcons
          name="arrow-right"
          size={18}
          color="black"
          style={{ marginTop: 5 }}
        />

        <Text
          style={{
            textAlign: "justify",
            lineHeight: 23,
            letterSpacing: 1,
            fontSize: 13,
            flexShrink: 1, // Ensures it doesn't exceed the screen
            flex: 1, // Takes available space
          }}
        >
          {title && <Text style={{ fontWeight: "bold" }}>{title}:</Text>}{" "}
          {description}
        </Text>
      </View>
    </View>
  );
};

const BulletText = ({ description }) => {
  return (
    <View className="flex flex-row">
      <MaterialIcons
        name="arrow-right"
        size={18}
        color="black"
        style={{ marginTop: 5 }}
      />
      <Text className="text-justify leading-[23px] tracking-wider text-[13px] ">
        {description}
      </Text>
    </View>
  );
};

const PrivacyPolicy = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#44689C"
        // translucent
      />

      <View className="bg-[#44689C]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            className={`flex flex-row items-center w-[90%] mx-auto  ${
              Platform.OS === "android" ? "mt-[22px] pb-2" : "mt-[65px]"
            }`}
          >
            <View className="bg-[#24BAEC45] rounded-full">
              <MaterialIcons
                name="keyboard-arrow-left"
                size={28}
                color="white"
              />
            </View>
            <View className="ml-[10px]">
              <Text className="font-montmedium font-semibold text-white text-[16px] leading-[22px]">
                Allons-Z
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* start */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="my-2 w-[95%] mx-auto pb-[55px]">
          <Text className="uppercase underline text-center font-semibold tracking-widest">
            PRIVACY POLICY
          </Text>

          <Text className="text-[18px] font-semibold py-1 tracking-wider">
            About Us
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] ">
            We welcome you to our Mobile Application ALLEZALLONS-Z.
            ALLEZALLONS-Z is an entity that dedicated to curating unforgettable
            experiences that cater to every type of traveller, from selecting
            the perfect location to arranging accommodations and activities that
            suit the user’s style. We develop customized travel plans as per the
            user’s needs by implementing a user-friendly booking system through
            an intuitive platform or Mobile application that enhances the
            overall customer experience in the tours and travel industry. This
            Mobile Application is a streamlined, intuitive interface designed
            for users who prefer a traditional travel booking experience without
            the added layer of incentives. It emphasizes ease of use,
            reliability, and round-the-clock accessibility, enabling users to
            book flights, trains, buses, hotels, and curated tour packages
            effortlessly. The mobile app integrates travel booking with an
            interactive reward-earning ecosystem, appealing to clients who wish
            to maximize their engagement with Allons-z. The company adopts a
            dual-platform approach, offering a user-friendly platform for
            conventional travel bookings and a feature-rich mobile application
            for clients seeking financial incentives through active
            participation in the reward program.
          </Text>

          <Text className="tracking-wider font-medium text-[16px] underline">
            Mobile App Services:
          </Text>

          <ListItem
            title="Purpose and Scope"
            description="The mobile application integrates travel booking with an interactive reward-earning ecosystem, appealing to clients who wish to maximize their engagement with Allons-z. It serves as a one-stop solution for travel planning and financial incentives"
          />
          <ListItem title="Features and Offerings" />

          <SubListItem
            title="Travel Booking"
            description={
              "Are similar booking capabilities, enhanced with app-specific features such as real-time notifications and personalized recommendations"
            }
          />

          <SubListItem
            title="Marketing Circle Program"
            description={
              "A referral-based system that rewards clients for meeting travel and referral targets, creating a cycle of earning and reinvestment"
            }
          />

          <SubListItem
            title="Reward Earning"
            description={
              "Financial rewards are accrued in a digital wallet, which clients can redeem for future travel expenses or withdraw as cash, adding a layer of economic value to their participation."
            }
          />

          <ListItem
            title="Availability and Compatibility"
            description={
              "The Mobile Application is downloadable from the App Store (iOS) and Play Store (Android), ensuring broad compatibility across devices and operating systems. Regular updates enhance functionality and security, maintaining a high standard of user experience."
            }
          />

          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
            Our Privacy Policy is incorporated as part of this Mobile
            Application / Platform. Please register yourself in the platform and
            access or view the platform only if you are agreeable to be bound by
            this Privacy Policy. In case you are not agreeable to the terms of
            the privacy policy or do not wish to be bound / obligated by these
            policies and / or terms and conditions, we kindly request you not to
            register access / view the platform.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-4 ">
            Please read this Privacy Policy and our Terms of Use carefully
            before accessing / registering yourself. By continuing to access the
            platform, please note that you agree to be bound by the provisions
            of this Privacy Policy.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-4">
            Our services have to be used legally and as permitted by law.
            ALLONS-Z has the right to completely stop providing or suspend the
            services if you do not comply with our terms or privacy policies.
            The contents and any information provided in the platform may be
            changed at any time by us without notice by updating the privacy
            policy. You agree to review the Terms and conditions of the Mobile
            Application / Privacy Policy regularly and your continued access or
            use of the platform will mean that you agree to and abide by the
            updated Terms & Conditions / Privacy Policy.
          </Text>

          <Text className="text-[18px] font-semibold py-1 tracking-wider mt-3">
            Information:
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-1">
            We collect the information of the user as provided by them such as
            the business entity name, email address, Contact address, country,
            subscription account details, payment details, email id, IP address
            and the like. The nature of the services offered by ALLONS-Z
            requires them to collect information like contact details, browsing
            history, geographical location.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
            We also collect and store certain information using cookies for ease
            of use by the customers. As a user, you are first required to
            register yourselves prior to using our services. Note that the
            collected information during the user registration process is
            governed as per the privacy policy. Please read the privacy policy
            before divulging the above-mentioned personal information.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-1">
            On being prompted for Registration as a new user, you are required
            to provide basic information such as Name, age, phone number, email
            address, physical address, and geographical location. The user shall
            be required to upload Aadhar Card, PAN Card and Bank Account details
            verification via 3rd Party APIs. The users can register only through
            a referral code provided by an existing user.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-4">
            As a user willing to register and to use the services rendered by us
            you understand and agree that by availing the services we may
            directly or indirectly collect and store information regarding your
            access and use of our platform and your personal details. You agree
            that we may use such information for any purpose related to any use
            of the platform including but not limited to:
          </Text>

          <View className="pl-2">
            <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
              i. Provide, troubleshoot and improving the performance of the
              platform;
            </Text>
            <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
              ii. verifying compliance with the terms and other conditions.
            </Text>
            <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
              iii. For internal purposes such as enhancing security of the
              Platform, auditing, testing, troubleshooting, data analysis and
              research conducted either indirectly/directly by Company;
            </Text>
            <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
              iv. To protect the users by preventing fraud and abuse and to
              protect the security of our merchants and the users.
            </Text>
          </View>

          <Text className="text-[18px] font-semibold py-1 tracking-wider mt-3">
            Reason for collection of Information:
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] ">
            The Mobile Application / Platform is involved in rendering services
            relating to curating unforgettable experiences that cater to every
            type of traveller, from selecting the perfect location to arranging
            accommodations and activities that suit the user’s style. ALLONS-Z
            is not involved in any of the internal dealings between the users
            and the third parties per se unless required to do so. The platform
            collects preferences of the users and provides personalized
            suggestions to the users based on their subscription. The site may
            track the IP address of a user’s computer and save certain
            information on their system in the form of cookies. A user has the
            option to accept or decline the cookies by modifying it on their
            browser.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-3">
            The information from users is collected for the following reasons:
          </Text>
          <BulletText
            description={
              "Contact Number (One Time Password) to login securely, to deliver a customized experience and to maintain user sessions"
            }
          />
          <BulletText
            description={
              "Country (To enhance the user experience by offering relevant information based on their geography)"
            }
          />
          <BulletText
            description={
              "City (To enhance the user experience by offering relevant information based on their geography)"
            }
          />
          <BulletText
            description={
              "To enable compliance with appropriate laws- legal and regulatory"
            }
          />
          <BulletText
            description={
              "To maintain a database of our users and for our internal assessment"
            }
          />

          <Text className="text-[18px] font-semibold py-1 tracking-wider mt-3">
            Applicability of this Privacy policy:
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px]">
            The terms mentioned in this privacy policy herein shall apply to the
            users, who have visited the platform to browse with no intention of
            committing their information and the registered users who are
            willing to divulge their information to ensure continued support of
            a personalized nature from the platform. Clients may submit trip
            photos for promotional use (with consent), receiving bonus rewards,
            enhancing community engagement and the photos are governed by the
            Privacy policy and the users agree to the same before submitting
            such photos or videos for collaboration.
          </Text>
          <Text className="text-[18px] font-semibold py-1 tracking-wider mt-3">
            Details of information is collected & shared:
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px]">
            The personal details / information that are given by the users like
            name, email address, mobile number, age, city and country of current
            residence, location, IP addresses are collected. The platform
            however, is not liable for any information compromised as a result
            of interaction of the users with any third-party sites which has
            been advertised / found in our Mobile Application / Platform.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
            In the event that the users do not want ALLONS-Z to collect any
            information or intend to remove their details from the database of
            ALLONS-Z, there is an option to opt out by sending an email to the
            email address provided on the Mobile Application.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
            Information: That is collected from Registered Users: If you create
            and register an account with us, you are required to give us certain
            information during creation of your account. We ask all registered
            users to provide a name, email address, mobile number, age, city and
            country of current residence and other details.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
            Information entered once by the users is by default stored in the
            database of the Mobile Application to ensure seamless logging in
            process by the users. The users may opt out of the same.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
            We may collect information of the user based on the users’
            requirement from ALLONS-Z. We shall share all the information as and
            when needed to you. We undertake not to share the same with any
            third parties exceeding the scope of engaging such third parties.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
            You agree that user information or any other information relating to
            use of the services may contain confidential and personal
            information. You agree and undertake that all the Confidential or
            personal Information will remain the sole property of ALLONS-Z and
            that we will not use such Information for purposes beyond the scope
            of providing the services within the scope of the subscription
            signed up by the users.
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px] pt-2">
            Please note that the information provided by the users is shared to
            third parties only to the extent as required.
          </Text>
          <Text className="text-[18px] font-semibold py-1 tracking-wider mt-3">
            Mobile Application Platform:
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px]">
            This platform is a streamlined, intuitive interface designed for
            clients who prefer an interactive reward-earning ecosystem,
            appealing to clients who wish to maximize their engagement with
            Allons-z. The Mobile Application serves as a one-stop solution for
            travel planning and financial incentives.
          </Text>
          <Text className="text-[18px] font-semibold py-1 tracking-wider mt-3">
            Security Issues
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px]">
            The Accuracy and Confidentiality of Your Account Information Is Your
            Responsibility: You are responsible for maintaining the secrecy and
            accuracy of your password, email address and other account
            information at all times. We recommend a strong password that you do
            not use with other services. We are not responsible for personal
            data transmitted to a third party as a result of incorrect details.
          </Text>
          <Text className="text-[18px] font-semibold py-1 tracking-wider mt-3">
            Applicable Law & Jurisdiction
          </Text>
          <Text className="text-justify leading-[23px] tracking-wider text-[13px]">
            Please note that in case of any dispute with ALLONS-Z generally or
            specifically related to the privacy policy or the terms and
            conditions, belongs to exclusive jurisdiction of Courts at
            Hyderabad, India and is governed exclusively by Indian Laws.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
