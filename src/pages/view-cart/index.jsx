import React from "react";

import Layout from "../../components/layout";
import Cart from "../../components/cart";

export default function ViewCartPage() {
  return (
    <Layout title="View my cart">
      <Cart stripeToken="pk_test_yNFG8EE1RMXpBQmCyWRlGDx400CddyVwyS" />
    </Layout>
  );
}
