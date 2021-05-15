import { Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0
import {navigate} from '../helpers';

export default class OnboardingPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Onboarding
                pages={[
                {
                    backgroundColor: '#f2f2f2',
                    image: <FontAwesome name="file-text-o" size={100} color="black" />,
                    title: 'Step 1',
                    subtitle: 'Make sure you qualify and select a proper account.',
                },
                {
                    backgroundColor: '#f2f2f2',
                    image: <FontAwesome name="camera" size={100} color="black" />,
                    title: 'Step 2',
                    subtitle: "Sign up and take a screenshot of the terms on the bank's website."
                },
                {
                    backgroundColor: '#f2f2f2',
                    image: <FontAwesome name="link" size={100} color="black" />,
                    title: 'Step 3',
                    subtitle: 'Link your account with Chase to BankScout to track your progress!',
                },
                {
                    backgroundColor: '#f2f2f2',
                    image: <FontAwesome name="wpforms" size={100} color="black" />,
                    title: 'Step 4',
                    subtitle: 'Let us know if we got anything wrong, or cancel the offer if you no longer want to do it.',
                },
                ]}
                onDone={() => push('StartOffer')}
            />
        )
    }

}
