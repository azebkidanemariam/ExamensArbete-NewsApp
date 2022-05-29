import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import globalStyles from "../../styles/styles";
import globalStyle from "../../GlobalStyles/styles";

const Policies: React.FC = () => {
  return (
    <SafeAreaView>
     
      <ScrollView>
        <View style={globalStyle.container}>
          <Text style={globalStyles.headline}>
            Personal data policy, Paradox Sweden
          </Text>
         
          <Text style={globalStyle.paragraph}>
            The use of cookies and similar tracking technology within Paradox
          </Text>
          <Text style={globalStyle.preamble}>
            .Schibsted uses cookies and similar tracking techniques to fulfill
            the purposes outlined in this policy. Cookies and similar techniques
            are used to secure and enable various features of Internet-based
            services. Some of these cookies and the feature they offer are
            necessary for the service to work and some are not. This type of
            technology either stores information in the user's device (such as
            an identifier) ​​or provides access to information about the device
            (technical information such as device type or device identifier).
            The use of cookies and similar tracking technology is regulated in
            the ePrivacy Directive and its Swedish implementation Act (2003:
            389) on electronic communication. Some cookies also collect personal
            data and this is regulated in the Data Protection Regulation (GDPR).
            You can find the list of cookies in services here.
          </Text>
          <Text style={globalStyle.paragraph}>
            Your rights as a user and personal data owner
          </Text>
          <Text style={globalStyle.preamble}>
            Today's legislation contains rights for users and the processing of
            their personal data. We want to help our users access and use these
            rights. The table below shows you as a user your rights and how you
            can access them. Schibsted strives to respond to all inquiries
            related to these rights as quickly as possible, but always within 30
            calendar days
          </Text>

          <Text style={globalStyle.paragraph}>
            Schibsted as personal data controller for your personal data
          </Text>
          <Text style={globalStyle.preamble}>
            Empowering people in their daily lives through various products and
            services is the core of Schibsted's business. We have a number of
            different websites, products and services, and we share data between
            them to, under our control and our responsibility, deliver according
            to our purpose. It is very important to us that personal data is
            handled in a secure and responsible manner so that we can obtain and
            maintain the trust of our users. We protect the privacy of our
            users. We also know that the use of personal data is the key to
            delivering the products and services that our users expect. We use
            personal data between the various companies within Schibsted to
            improve the products and services that the companies offer. Personal
            data is also used to improve and increase the relevance of
            Schibsted's advertisements and marketing. We at Schibsted are
            responsible for the processing of our users' personal data,
            including those processed by specific companies or brands. We try to
            be completely open about our handling of personal data. We also try
            to always maintain a good balance between the privacy of our users
            and Schibsted's commercial interests. Personal data used for
            journalistic purposes is controlled by the individual newsrooms. You
            can find their contact information on each organization's website,
            e.g. Aftonbladet.se. This document summarizes what personal
            information we collect, why we collect it, who it can be shared with
            and how you can use your rights regarding your personal information.
            If you have questions or concerns about Schibsted's processing of
            personal data, you can reach Schibsted's Privacy Team via this
            contact form. We promise to answer all questions within 30 days. You
            can also raise any issues or complaints with the National Privacy
            Protection Authority, the Privacy Protection Authority.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Policies;

const styles = StyleSheet.create({

});
