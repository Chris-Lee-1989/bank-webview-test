import React, { useEffect, useRef, useState } from 'react';
import { Platform, SafeAreaView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {

  // 웹뷰 ref
  const ref = useRef();
  // 
  const [navState, setNavState] = useState({ 
    canGoBack: false, 
    ref: null
  });

  useEffect(() => {

  }, [navState?.canGoBack])

  
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>BNK 상단 바</Text>
      </View>
      <WebView 
        originWhitelist={['*']}
        source={{ uri: 'https://bank-shop.kkot.farm/bnk' }} 
      />
    </SafeAreaView>
  );
};

export default App;
