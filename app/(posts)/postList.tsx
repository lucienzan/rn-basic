import { View, Text } from "react-native";
import React from "react";
import { useGetPosts } from "../../hooks/usePost";
import { FlatList } from "react-native-gesture-handler";
import PostItem from "./components/postItem";

const PostList = () => {
  const { data, loading } = useGetPosts("https://jsonplaceholder.typicode.com/posts");
  return (
  <>
    {loading && <View><Text>Loading</Text></View>}
    <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            return (
              <PostItem item={item} loading={loading} />
            );
          }}
        />
      </View>
    </>
  );
};

export default PostList;