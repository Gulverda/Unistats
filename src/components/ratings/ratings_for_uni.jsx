import React from 'react';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Recharts() {
  const data = [
    { year: '2021', GAU: 90, TSU: 87, EU: 25, KIU: 46 },
    { year: '2022', GAU: 99, TSU: 65, EU: 45, KIU: 23 },
    { year: '2023', GAU: 86, TSU: 78, EU: 67, KIU: 23 },
    { year: '2024', GAU: 79, TSU: 85, EU: 89, KIU: 23 },
  ];

  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Charts with recharts library</h2>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Line Chart</h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <Tooltip />
              <XAxis dataKey="year" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Legend />
              <Line type="monotone" dataKey="GAU" stroke="#0c2015" name="GAU" />
              <Line type="monotone" dataKey="TSU" stroke="#0b60b7" name="TSU" />
              <Line type="monotone" dataKey="EU" stroke="#4e18ff" name="EU" />
              <Line type="monotone" dataKey="KIU" stroke="#3c10ea" name="KIU" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <XAxis dataKey="year" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Legend />
              <Bar dataKey="GAU" fill="#0c205D" name="GAU" />
              <Bar dataKey="TSU" fill="#0b60b7" name="TSU" />
              <Bar dataKey="EU" fill="#4e18ff" name="EU" />
              <Bar dataKey="KIU" fill="#3c10ea" name="KIU" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div> */}
    </div>
  );
}
