import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow, configure  } from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter () });

import {PhoneDetailComponent} from './index';

describe("PhoneDetailComponent", () => {
    let wrapper;

    describe("test container", () => {

        let phone = {};

        beforeEach(() => {
            wrapper = shallow(
                <PhoneDetailComponent phone={phone}/>
            );
        });
        it("when given empty `items", () => {
            expect(wrapper.find("h2").exists()).toBe(false);
        });
        it('when given full item', () => {
            phone = {
                phone: {
                    name: "Samsung Galaxy S7",
                    url: "https://s7d2.scene7.com/is/image/SamsungUS/SMG935_edge_102116?$product-details-jpg$",
                    type: "smartphone", color: "grey", description: "Phone description", price: "1000", id: 2
                }
            };
            expect(wrapper.find("h2").value).toEqual('Samsung Galaxy S7');
        })
    });
});