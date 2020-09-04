const allProducts = [
   {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90',
    regular: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  { 
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90',
    regular: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90',
    regular: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  { 
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90',
    regular: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
    {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    full: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    regular: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    full: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    regular: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    full: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    regular: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1472666260353-23210544cdf1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1472666260353-23210544cdf1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90',
    regular: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1520367745676-56196632073f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1520367745676-56196632073f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1499971856191-1a420a42b498?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1499971856191-1a420a42b498?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1521722776011-39ec91e0c14b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1521722776011-39ec91e0c14b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1532437121297-dc8302290c84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1532437121297-dc8302290c84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1520923179278-ee25e25e09e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1520923179278-ee25e25e09e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  },
  {
    title: 'Roupa estiloza',
    descricao: 'Peça de roupa para chamar a atenção onde você for!',
    valor: '168.00',
    parcelas: '12',
    parcelasValor: '15.90', 
    regular: 'https://images.unsplash.com/photo-1513521712264-512ceb91a940?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0',
    small: 'https://images.unsplash.com/photo-1513521712264-512ceb91a940?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTczOH0'
  }
];

