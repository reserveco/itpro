<template>
  <div>
    <Carousel />
    <div>
      <Article />
    </div>
    <div>
      <div class="my-8">
        <h3>
          Использование услуг IT аутсорса имеет множество преимуществ для
          бизнеса, среди которых:
        </h3>
        <ol class="list-decimal text-lg">
          <li>
            Снижение затрат. Вместо того, чтобы нанимать своих собственных
            ИТ-специалистов, компании могут воспользоваться услугами IT аутсорса
            и сэкономить на затратах на обучение, оборудование и зарплаты
            сотрудников.
          </li>
          <li>
            Высокая квалификация специалистов. IT аутсорс компании имеют широкий
            круг специалистов, имеющих большой опыт работы в различных областях
            ИТ, что гарантирует высокий уровень квалификации и профессионализма.
          </li>
          <li>
            Более высокий уровень безопасности. IT аутсорс компании имеют опыт
            работы с различными системами безопасности и могут предоставить
            компаниям более высокий уровень защиты от кибератак и утечек данных.
          </li>
          <li>
            Гибкость и масштабируемость. IT аутсорс компании могут быстро
            масштабировать свои услуги, чтобы соответствовать изменяющимся
            потребностям компании. Это позволяет бизнесу гибко реагировать на
            изменения в рыночных условиях и экономии ресурсов.
          </li>
          <li>
            Концентрация на основной деятельности. Использование IT аутсорса
            позволяет компаниям сосредоточиться на своей основной деятельности и
            наращивать конкурентные преимущества в своей отрасли, вместо того,
            чтобы тратить время и ресурсы на ИТ-разработку и обслуживание.
          </li>
        </ol>
      </div>
    </div>
    <div class="my-8">
      <table id="example-tab-2" class="display my-4" style="width: 100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, k) in cities.data" :key="k">
            <td>{{ i.id }}</td>
            <td>{{ i.city }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {},
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios,
  }) {
    const ip = await $axios.$get('http://icanhazip.com')
    const cities = await $axios.$get(
      'http://192.168.5.126:9999/subscribe/?api=abae48ae82dc8d6806a34c8539b034e5&list_rows'
    )
    return { ip, cities }
  },
  data() {
    return {
      cities: 'cities',
    }
  },
  mounted() {
    // $(function () {
    // Handler for .ready() called.
    $('#example-tab-2').DataTable({
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/ru.json',
      },
    })
    // })
  },
}
</script>
