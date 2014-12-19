<?php

class TasksTableSeeder extends Seeder {

	public function run()
	{
    DB::table('tasks')->delete();

    $titles = array(
      'Go to the store',
      'Finish Backbone course',
      'Get some sleep'
    );

    foreach($titles as $t) {
      Task::create(array(
        'title' => $t
      ));
    }
	}

}