<NavigationContainer>
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "#1E90FF",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Restaurants" component={RestaurantScreen} />
    <Tab.Screen name="Maps" component={Maps} />
    <Tab.Screen name="Settings" component={Setting} />
  </Tab.Navigator>
</NavigationContainer>;
