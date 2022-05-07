import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3ByaW5nLWxlYWYtNyIsImV4cCI6MTY1MTkyNTM2M30.GAJXg-2PlvUjVYIlhi4hRNGrebDycU67vFRJTVa5BkE';

chatClient.connectUser(
  {
    id: 'spring-leaf-7',
    name: 'spring',
    image: 'https://getstream.io/random_png/?id=spring-leaf-7&name=spring',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'spacex', {
  image: 'https://goo.gl/Zefkbx',
  name: 'SpaceX launch discussion',
});

const App = () => (
  <Chat client={chatClient} theme='livestream dark'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader live />
        <VirtualizedMessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
    </Channel>
  </Chat>
);

export default App;
