import React, { useState, useRef } from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  useForeground,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : "ca-app-pub-7507306628873334/6312678745"; //banner Key

const GoogleAdsMob = () => {
  const bannerRef = useRef(null);

  useForeground(() => {
    Platform.OS === "ios" && bannerRef.current?.load();
  });

  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView>
      <View className="w-[90%] mx-auto" style={{ flex: 1 }}>
        <Text>GoogleAdsMob</Text>

        <View
          className=""
          style={{
            alignSelf: "center",
          }}
        >
          <View
            className=""
            style={{
              alignSelf: "center",
            }}
          >
            <BannerAd
              ref={bannerRef}
              unitId={adUnitId}
              size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            />
          </View>
        </View>
        <Text>
          icitudin risus, sed tincidunt ex. Curabitur elementum purus a ligula
          condimentum, sit amet sagittis ex dignissim. Etiam vel magna nec purus
          cursus condimentum eu vel ipsum. Nunc et odio pharetra, convallis
          dolor in, luctus dui. Donec vulputate sollicitudin faucibus. Duis
          ullamcorper mauris quis est vehicula aliquet. Morbi porta, lorem porta
          interdum pellentesque, diam tellus faucibus ipsum, quis placerat odio
          mi id arcu. Pellentesque felis lectus, facilisis id dolor et, semper
          luctus nisi. Donec sodales vel lectus in fermentum. Nulla cursus{" "}
        </Text>
        <View
          className=""
          style={{
            alignSelf: "center",
          }}
        >
          <BannerAd
            ref={bannerRef}
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          />
        </View>
        <Text>
          {" "}
          sollicitudin est at tincidunt. Nullam vitae posuere erat. Vestibulum
          tincidunt rhoncus lacus nec suscipit. Maecenas nec scelerisque erat.
          Fusce euismod volutpat congue. Praesent vitae mi lacus. Praesent
          commodo elit id arcu tincidunt, quis efficitur lorem dictum.
          Pellentesque at ante ut ex feugiat tempor eget sit amet libero. Aenean
          ut turpis pretium, luctus augue consequat, cursus lacus. Ut et odio
          ex. Duis pulvinar velit nulla, ac feugiat tortor tristique posuere.
          Nullam tincidunt dapibus nunc a vestibulum. Suspendisse ut arcu neque.
          Praesent tempus magna sit amet suscipit lobortis. Sed vestibulum, mi a
          tincidunt semper, ligula quam elementum nibh, vitae tempor purus
          ligula id turpis. Donec sed fermentum dolor. Ut felis lacus, elementum
          sed ligula eu, fermentum sollicitudin lacus. Sed nunc dolor, tincidunt
          a risus at, tincidunt consequat arcu. In et hendrerit{" "}
        </Text>
        <View
          className=""
          style={{
            alignSelf: "center",
          }}
        >
          <BannerAd
            ref={bannerRef}
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          />
        </View>
        <Text>
          enim. Praesent bibendum pellentesque mi, vitae rhoncus leo auctor
          quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin ut ante sit amet est auctor vulputate.
          Nulla semper eros id sagittis hendrerit. Mauris odio libero, tempor eu
          tristique id, molestie a nisi. Nulla iaculis nisl in ante maximus
          congue. Integer ipsum nunc, fermentum nec justo eget, tincidunt
          eleifend odio. Mauris nec dapibus libero. Curabitur eget ante id velit
          ultrices cursus sed in sem. Phasellus quis faucibus enim. Duis
          fringilla dignissim turpis eget vestibulum. Vivamus sed massa iaculis,
          iaculis mi id, fermentum lectus. Integer eget lectus nunc. Null{" "}
        </Text>
        <View
          className=""
          style={{
            alignSelf: "center",
          }}
        >
          <BannerAd
            ref={bannerRef}
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          />
        </View>
        <Text>
          am egestas sed odio vel placerat. Pellentesque laoreet lorem vitae dui
          luctus placerat. Morbi et nibh tincidunt, molestie ex a, semper ipsum.
          Nullam sagittis at justo ac venenatis. In egestas nisi at dolor
          condimentum tincidunt. Nulla urna quam, mattis sit amet urna eu,
          feugiat cursus diam. Phasellus convallis sem sit amet velit iaculis
          dignissim. Curabitur at viverra orci, sed finibus ex. Aliquam vitae
          nulla et urna faucibus aliquam. Nullam efficitur tincidunt odio, id
          ullamcorper justo ultrices in. Maecenas laoreet massa sed elit
          vestibulum, eu{" "}
        </Text>
        <View
          className=""
          style={{
            alignSelf: "center",
          }}
        >
          <BannerAd
            ref={bannerRef}
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          />
        </View>
        <Text>
          fermentum urna tristique. Sed tempus suscipit est et vestibulum.
          Praesent sit amet semper tortor. Sed ullamcorper, est nec varius
          mollis, ligula eros dignissim lacus, nec fringilla libero elit sit
          luctus. Ut neque tortor, faucibus non euismod vitae, malesuada ut
          metus. Morbi vitae nunc malesuada, imperdiet lacus nec, viverra nisl.
          Nam malesuada dui et rutrum auctor. Praesent ac massa dui. Nulla
          iaculis vel elit id aliquam. Suspendisse velit mauris, lacinia sit
          amet risus in, sagittis convallis est. Maecenas lectus tellus, auctor
          et ultricies tempus, bibendum non nunc. Suspendisse hendrerit, purus
          et facilisis mattis, eros odio placerat urna, eu malesuada arcu risus
          pharetra odio. Vestibulum tincidunt quis lectus non tempus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Donec consectetur lobortis eros vel dictum.
          Vestibulum et pharetra augue. Phasellus dui odio, efficitur in viverra
          non, luctus in diam. Fusce eu ornare ligula. Pellentesque luctus, orci
          et molestie fringilla,{" "}
        </Text>
        <View
          className=""
          style={{
            alignSelf: "center",
          }}
        >
          <BannerAd
            ref={bannerRef}
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          />
        </View>
        <Text>
          mi sapien accumsan lectus, cursus condimentum magna elit nec ante.
          Duis aliquet orci vitae est ultricies aliquet. Ut tristique justo quis
          gravida fermentum. Aliquam in efficitur tortor, vitae consectetur
          mauris. Aliquam tristique velit vitae risus ultricies feugiat. Duis
          dictum cursus nulla quis tempor. Proin tellus sapien, pharetra id agna
          molestie ut. Integer non nibh dui. Donec massa lorem, ullamcorper sit
          amet dui sed, feugiat luctus ligula. Vestibulum lorem, ull{" "}
        </Text>
        <View
          className=""
          style={{
            alignSelf: "center",
          }}
        >
          <BannerAd
            ref={bannerRef}
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          />
        </View>
        <Text>
          amcorper sit amet dui sed, feugiat luctus ligula. Vestibulum aliquet,
          orci id auctor malesuada, nunc quam hendrerit metus, sed vestibulum
          lectus eros quis tellus. Ut efficitur sapien dui, eu porttitor augue
          tempor a. Morbi at iaculis lectus. Nullam sit amet libero ut orci
          alelis egestas varius. Nulla euismod orci a iaculis interdum. Cras sed
          urna id felis tempor mattis. Nam in viverra lorem, non viverra felis.
          Integer sit amet ornare arcu, sed vehicula nibh. Praesent convallis
          purus. Morbi scelerisque posuere venenatis. Aliquam eget vulputate
          turpis. Vestibulum consectetur ac est eget elementum. Praesent mattis
          auctor metus, eu pulvinar dolor vehicula tristique. Quisque sed
          laoreet turpis. Morbi lacinia, tellus a efficitur sodales, diam velit
          maximus urna, sit amet pellentesque mauris sem et sem. Sed at purus{" "}
        </Text>
        <View
          className=""
          style={{
            alignSelf: "center",
          }}
        >
          <BannerAd
            ref={bannerRef}
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          />
        </View>
        <Text>
          ut augue luctus egestas. Sed in nunc a tortor rhoncus varius eget eu
          enim. Aliquam sit amet augue vel lorem ullamcorper pretium in nec
          metus. Maecenas pharetra risus bibendum, sagittis libero sollicitudin,
          viverra, nulla in suscipit consectetur, sem libero dapibus sem, sit
          amet egestas nisl mauris quis turpis. Pellentesque quis viverra lacus.
          Sed gravida rhoncus mauris, sed vehicula sem ultrices non. Donec
          interdum eget nunc eu suscipit. Ut porttitor purus et volutpat
          viverra. Quisque elit massa, placerat sed laoreet a, vestibulum auctor
          odio. Ut gravida interdum laoreet. Ut finibus eu turpis et auctor. Sed
          dui eros, consequat eu ornare id, vehicula hendrerit metus. Duis
          porttitor, lectus id fermentum placerat, lectus ex facilisis lectus, a
          dignissim quam neque vitae neque. Ut porttitor sagittis risus eu
          malesuada. Pellentesque fringilla tortor non{" "}
        </Text>
        <View
          className=""
          style={{
            alignSelf: "center",
          }}
        >
          <BannerAd
            ref={bannerRef}
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          />
        </View>
        <Text>
          dolor luctus vestibulum. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Pellentesque
          vel metus vitae libero semper rhoncus. Vestibulum cursus ipsum in ante
          elementum, id molestie mi porttitor. Sed convallis posuere nibh nec
          molestie. Nunc lobortis dolor eget purus finibus, non eleifend magna
          lacinia. Pellentesque vel augue lacus. Nulla urna elit, blandit a elit
          at, aliquet finibus libero. In vitae est ac ante laoreet aliquam.
          Aenean nec leo quam. Maecenas finibus tortor nec lectus bibendum
          egestas. Mauris a gravida nunc. Duis libero nunc, feugiat id venenatis
          sit amet, aliquam at tellus. Sed pulvinar enim vestibulum suscipit
          feugiat. Cras eget placerat nunc. Duis posuere, purus non lobortis
          ultricies, quam tellus maximus diam, at pulvinar urna tellus eget
          viverra eget et neque. Nunc eget sapien ornare, hendrerit metus quis,
          aliquam arcu. Cras gravida, orci quis porta mattis, orci diam dapibus
          ligula, nec sodales turpis ligula a mi. Maecenas sed augue ac tortor
          vehicula pulvinar. Aenean id egestas purus, ut mattis nisi.
          Suspendisse tempor erat ut orci sodales pellentesque. Fusce blandit
          mauris eget risus auctor fringilla laoreet in metus. Donec imperdiet
          interdum enim, et venenatis lorem cursus non. Donec risus lacus,
          auctor vitae mattis ac, tempus id risus. Cras ultricies erat eget odio
          blandit, id posuere mauris rhoncus. Morbi tortor odio, auctor vitae
          eros at, rhoncus cursus augue. Donec nec feugiat nulla. Vivamus
          tristique ex. Curabitur tristique luctus convallis. Suspendisse
          posuere, lorem vel sagittis tincidunt, lectus magna mollis dui, sit
          amet consequat felis mi ac lacus. Morbi tempus dui at magna
          sollicitudin dictum. Suspendisse quis rhoncus turpis. Sed quis congue
          tortor. Sed egestas nisl felis, at sollicitudin sem hendrerit et.
          Nullam cursus fermentum quam, vitae mollis ante euismod ac.
        </Text>
      </View>
    </ScrollView>
  );
};

export default GoogleAdsMob;

const styles = StyleSheet.create({});
