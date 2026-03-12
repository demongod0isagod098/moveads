import React from 'react';

const Comparison = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Billboards</th>
                    <th>Moving Ads</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Visibility</td>
                    <td>High visibility in a static location</td>
                    <td>Dynamic visibility, reaching more viewers</td>
                </tr>
                <tr>
                    <td>Cost</td>
                    <td>Often higher upfront costs</td>
                    <td>Variable based on distance and duration</td>
                </tr>
                <tr>
                    <td>Flexibility</td>
                    <td>Fixed location; hard to change</td>
                    <td>Can change routes easily</td>
                </tr>
                <tr>
                    <td>Engagement</td>
                    <td>Passive engagement</td>
                    <td>Interactive engagement potential</td>
                </tr>
                <tr>
                    <td>Targeting</td>
                    <td>Broad audiences</td>
                    <td>Can target specific locations and events</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Comparison;