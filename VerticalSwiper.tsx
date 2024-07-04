import React, { useState, useEffect } from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

interface Video {
  id: string;
  category: string;
}

interface VerticalSwiperProps {
  category: string;
}

const VerticalSwiper: React.FC<VerticalSwiperProps> = ({ category }) => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // Fetch videos based on category
    setVideos([...Array(10).keys()].map(i => ({ id: `${category}-${i}`, category })));
  }, [category]);

  return (
    <FlatList
      data={videos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <VideoItem video={item} />}
      snapToInterval={height}
      snapToAlignment="start"
      decelerationRate="fast"
    />
  );
};

const VideoItem: React.FC<{ video: Video }> = ({ video }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{video.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});

export default VerticalSwiper;
