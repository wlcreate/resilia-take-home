Notification.destroy_all
Notification.reset_pk_sequence

notification_1 = Notification.create!(title: "Fundraising Dept Meeting", details: "Team meeting to brainstorm fundraising ideas.")
notification_2 = Notification.create!(title: "Grant Research", details: "Research grant applications that we qualify for and can apply to.")
notification_3 = Notification.create!(title: "Marketing Dept Meeting", details: "Touch base on marketing materials for upcoming event.")
notification_4 = Notification.create!(title: "Donor Meeting", details: "Meeting with X Foundation on donating to upcoming event.")
notification_5 = Notification.create!(title: "Grant Applications", details: "Work with X on grant applications and materials.")
notification_6 = Notification.create!(title: "Social Media Strategy", details: "Discuss new social media strategy.")