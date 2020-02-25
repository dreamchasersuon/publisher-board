import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import Td, { calcDaysFromRegistration } from './Td';

describe('renders with date or with simple value, calc date before', () => {
  test('renders table body cell with date or simple value', () => {
    expect(
      snapshotDiff(
        <Td isDate value="2019-01-30T10:24:53+00:00" />,
        <Td value="123442" />,
      ),
    ).toMatchSnapshot();
  });
  test('renders table body cell with date in days before', () => {
    const dateUTC = '2019-01-30T10:24:53+00:00';
    const daysBefore = calcDaysFromRegistration(dateUTC);
    const testRenderer = renderer.create(<Td isDate value={dateUTC} />);

    const testInstance = testRenderer.root;

    expect(
      testInstance.findByProps({ className: 'TableBody-cell' }).children,
    ).toEqual([`${daysBefore}`, 'd']);
  });
});
