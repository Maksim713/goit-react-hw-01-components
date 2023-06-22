import React from 'react';
import { Section } from './Section/Section';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <>
      <Section title="Task-1. Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Task-2. Statistics">
        <Statistics title="Upload stats" stats={data} />
      </Section>

      <Section title="Task-3. FriendList">
        <FriendList friends={friends} />
      </Section>

      <Section title="Task-4. TransactionHistory">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};
