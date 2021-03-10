import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {observer} from 'mobx-react';

const App = observer(() => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{backgroundColor: 'yellow', height: 200, width: 200}}></View>
        </View>
      </SafeAreaView>
    </>
  );
});

export default App;
