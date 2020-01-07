import * as React from 'react';
import TabsWithPanel from '../TabsWithPanel';
import TabContent from '../../TabContent/TabContent';

export default (
  <TabsWithPanel uxpId="0" defaultValue={0} tabs={[{label: "Tab 1"}, {label: "Tab 2"}, {label: "Tab 3"}]}>
    <TabContent uxpId="1" dir="x">Tab Content 1</TabContent>
    <TabContent uxpId="2" dir="x">Tab Content 2</TabContent>
    <TabContent uxpId="3" dir="x">Tab Content 3</TabContent>
  </TabsWithPanel>
);
